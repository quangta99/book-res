import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  bookForCustomer(bookModel, callback){
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('/book/booking/anonymous', bookModel, {headers: header}).subscribe((res) => {
      console.log(res);
    })
  }
  bookForUser(bookModel, callback){
    const option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    this.http.post('/book/booking/user', bookModel, option).subscribe((res) => {
      console.log(res);
    });
  }
  getBookings(callback) {
    const option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    this.http.get('/book/booking/all').subscribe((res) => {
      callback.bookings = res;
      console.log(res);
    });
  }
}
