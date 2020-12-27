import { Router } from '@angular/router';
import { RestaurantInformation } from './../../models/restaurant';
import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restaurants: Observable<RestaurantInformation>;
  loading = true;
  token: string;
  responsiveOptions;
  search: string;
  constructor(private restaurantService: RestaurantService, private userService: UserService, private authService: AuthService, private router: Router) {
    this.token = this.authService.getToken();
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  ngOnInit(): void {
    this.restaurantService.getRestaurants(this);
  }
  viewRestaurant(id, item: RestaurantInformation){
    this.router.navigate(['/book', id, JSON.stringify(item)]);
  }
  getType(type, street) {
    this.restaurantService.getType(type, street, this);
    console.log(type);
  }
}
