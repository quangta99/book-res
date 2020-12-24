import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = true;
  token: string;
  constructor(private restaurantService: RestaurantService, private userService: UserService, private authService: AuthService) {
    this.token = this.authService.getToken();
  }
  ngOnInit(): void {
  }
}
