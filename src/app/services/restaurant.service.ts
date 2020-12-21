import { Restaurant } from './../models/restaurant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }
  getRestaurants(callback){
    return this.http.get(environment.url + '').subscribe((res) => {
      callback = res;
      callback.loading = false;
    });
  }
  getRestarant(id: string, callback){
    return this.http.post(environment.url + '', id).subscribe((res) => {
      callback.restaurant = res as Restaurant;
    });
  }
  getCategorys(id: string, callback){
    return this.http.post(environment.url + '', id).subscribe((res) => {
      callback.restaurants = res;
    });
  }
}
