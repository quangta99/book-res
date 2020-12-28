"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestaurantService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var RestaurantService = /** @class */ (function () {
    function RestaurantService(http) {
        this.http = http;
    }
    RestaurantService.prototype.getRestaurants = function (callback) {
        return this.http.get('/res/restaurant/all').subscribe(function (res) {
            console.log(res);
            callback.restaurants = res;
            callback.loading = false;
        });
    };
    RestaurantService.prototype.getType = function (type, street, callback) {
        var header = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        var body = { TypeName: type, Street: street };
        return this.http.post('/res/restaurant/search', body, { headers: header }).subscribe(function (res) {
            callback.restaurants = res;
            var temp = res;
            if (temp.length === 0) {
                callback.result = false;
            }
        });
    };
    RestaurantService.prototype.getRestaurantbyId = function (id, callback) {
        return this.http.get('/res/restaurant/all').subscribe(function (res) {
            var restaurants = res;
            var restaurant;
            restaurants.foreach(function (item) {
                if (item.resId === id) {
                    restaurant = item;
                }
            });
            callback.restaurant = restaurant;
        });
    };
    RestaurantService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RestaurantService);
    return RestaurantService;
}());
exports.RestaurantService = RestaurantService;
