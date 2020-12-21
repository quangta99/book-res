import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  register(email, password) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
    });
    let body = `email=${email}&password=${password}`;
    return this.http.post(environment.url + '/api/user', body, { headers: header }).subscribe((res) => {
      console.log(res);
    });
  }
  login(email, password) {
    // headers:{
    //   "Content-Type":"application/x-www-form-urlencoded"
    // }
    const body = `email=${email}&password=${password}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;');
    this.http.post(environment.url + '/api/logn', body).subscribe((res) => {

    });
  }
}
