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
    return this.http.get('/res/restaurant/all').subscribe((res : Array<RestaurantInformation>) => {
      if(callback.currentTypeName === 'all') {
        callback.restaurantsSlide = res;
        callback.loading = false;
        var resRes = new Array<RestaurantInformation>();
        res.forEach(x => {
          resRes.push(x);
        });
        callback.restaurants = resRes;
      }
      else {
        let temp = new Array<RestaurantInformation>();
        res.forEach(x => {
          if(x.typeName.includes(callback.currentTypeName)){
            temp.push(x);
            return;
          }
        });
        var resRes = new Array<RestaurantInformation>();
        temp.forEach(x => {
          resRes.push(x);
        });
        callback.restaurantsSlide = temp;
        callback.loading = false;
        callback.restaurants = resRes;
      }
      this.getFirstArrRes(callback);
      this.getRestaurantSpliced(callback);
      console.log(callback.restaurantsSlide);
      console.log(callback.restaurants);
    });
  }
  getType(type: string, street: string, callback) {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { TypeName: type, Street: street };
    return this.http.post('/res/restaurant/search', body, { headers: header }).subscribe((res) => {
      const temp = res as Array<RestaurantInformation>;
      if (temp.length === 0) {
        callback.result = false;
      }
      else {
        callback.restaurants = temp;
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
    let count = 0;
    const temp = new Array<RestaurantInformation>();
    const restaurant = callback.restaurants as Array<RestaurantInformation>;
    restaurant.forEach(item => {
      if (count++ < 4) {
        temp.push(item);
      }
    });
    callback.restaurantLoad = temp;
    callback.loadingRes = false;
  }
  getRestaurantSpliced(callback) {
    const temp = callback.restaurants as Array<RestaurantInformation>;
    temp.splice(0, 4);
    callback.restaurants = temp;
    callback.loading = false;
  }
}
