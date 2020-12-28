import { User } from './../models/user';
import { AuthService } from './auth.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  localStorage: Storage;
  constructor(private http: HttpClient, private authService: AuthService) { }
  register(email, password, callback) {
    callback.loading = true;
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { Email: email, Password: password };
    this.http.post('/api/user', body, { headers: header }).subscribe(
      (res) => {
      },
      (error: any) => {
        if (error.status === 200) {
          callback.display = true;
          callback.loading = false;
        }
        else if (error.status === 400) {
          callback.show = true;
          callback.loading = false;
        }
        else if (error.status === 500) {
          callback.error = true;
          callback.loading = false;
        }
      }
    );
  }
  login(email, password, callback) {
    callback.loading = true;
    const body = 'client_secret=' + environment.client_secret + '&client_id=' + environment.client_id + '&username=' + email + '&password=' + password + '&grant_type=password';
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;');
    this.http.post('/connect/token', body, { headers: headers }).subscribe((res: any) => {
      if (res.access_token !== null) {
        this.authService.setToken(res.access_token);
        window.location.replace('/home');
      }
    }, (error) => {
      callback.loading = false;
      if (error.status === 400) {
        callback.show = true;
      }
      if(error.status === 500) {
        callback.error = true;
      }
    });
  }
  getUser(token: string, callback) {
    const option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    this.http.get('/api/user', option).subscribe((res) => {
      callback.user = res;
    },
      (error) => {
        console.log(error);
      });
  }
  changeInfor(user: User, callback){
    callback.loading = true;
    const option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    this.http.put('/api/user', user, option).subscribe((res) => {
      callback.loading = false;
    });
  }
  recovery(email, callback) {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { Email: email };
    this.http.post('/api/user/password/recover', body, {headers: header}).subscribe((res: any) => {
      if (res === true) {
         callback.check = true;
      }
    },
    (error) => {
      if (error.status === 400) {
        callback.checkExistEmail = false;
      }
    }
    );
  }
  changePasswordWithRecovery(token: string, email: string, password: string , callback){
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { Email: email, Token: token, NewPassword: password };
    this.http.post('/api/user/password/newpassword', body, {headers: header}).subscribe((res) => {
      if(res === true) {
        callback.display = true;
      }
    }, (error) => {
      if (error.status === 200) {
      }
      else if (error.status === 400) {
        callback.checkToken = false;
      }
    });
  }
  changePassword(newPassword: string, password: string, callback) {
    const option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    const body = { NewPassword: newPassword, ConfirmPassword: password };
    this.http.post('/api/user/change-password', body, option).subscribe((res) => {
    }, (error) => {
      if (error.status === 200) {
        callback.displayNotiPass = true;
      }
    } );
  }
  changeEmail(emailToUpdate: string, oldEmail: string, callback){
    callback.loading = true;
    const option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    const body = { EmailToUpdate: emailToUpdate, OldEmail: oldEmail };
    this.http.post('/api/user/change-email', body, option).subscribe((res) => {
      callback.displayNotiEmail = true;
      callback.loading = false;
      callback.ngOnInit();
    }, (error) => {
      if (error.status === 200) {
        callback.loading = false;
        callback.displayNotiEmail = true;
      }
    } );
  }
}
