import { RestaurantInformation } from './../models/restaurant';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }
  getRestaurants(callback) {
    return this.http.get('/res/restaurant/all').subscribe((res) => {
      callback.restaurants = res;
      callback.loading = false;
    });
  }
  getType(type: string, street: string, callback) {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { TypeName: type, Street: street };
    return this.http.post('/res/restaurant/search', body, { headers: header }).subscribe((res) => {
      callback.restaurants = res;
      const temp = res as Array<RestaurantInformation>;
      if (temp.length === 0) {
        callback.result = false;
      }
    });
  }
  getRestaurantbyId(id, callback) {
    return this.http.get('/res/restaurant/all').subscribe((res) => {
      let restaurants = new Array<RestaurantInformation>();
      restaurants = res as Array<RestaurantInformation>;
      let restaurant;
      restaurants.forEach(item => {
        if (item.resId === id) {
          restaurant = item;
        }
      });
      callback.restaurant = restaurant;
    });
  }
  getFirstArrRes(callback) {
    return this.http.get('/res/restaurant/all').subscribe((res) => {
      let count = 0;
      const temp = new Array<RestaurantInformation>();
      const restaurant = res as Array<RestaurantInformation>;
      restaurant.forEach(item => {
        count++;
        if (count < 3) {
          temp.push(item);
        }
      });
      callback.restaurantLoad = temp;
      callback.loadingRes = false;
    });
  }
}
