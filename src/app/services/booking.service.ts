import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  bookForCustomer(bookModel, callback){
    callback.loading = true;
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('/book/booking/anonymous', bookModel, {headers: header}).subscribe((res) => {
      callback.loading = false;
    }, (error) => {
      if (error.status === 200) {
        callback.loading = false;
        callback.displayNoti = true;
      }
      else if (error.status === 400) {
        callback.error = true;
        callback.loading = false;
      }
    });
  }
  bookForUser(bookModel, callback){
    callback.loading = true;
    const option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    this.http.post('/book/booking/user', bookModel, option).subscribe((res) => {
      callback.loading = false;
    }, (error) => {
      if (error.status === 200) {
        callback.loading = false;
        callback.displayNoti = true;
      }
      else if (error.status === 400) {
        callback.error = true;
        callback.loading = false;
      }
    });
  }
  getBookings(callback) {
    const option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    this.http.get('/book/booking/all', option).subscribe((res) => {
      callback.tickets = res;
      console.log(res);
    });
  }
}
