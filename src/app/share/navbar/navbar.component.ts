import { RestaurantService } from './../../services/restaurant.service';
import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  search: string;
  user = new User();
  time = new Date();
  expireDate;
  tokenInfor;
  timeOut: boolean;
  constructor(public userService: UserService, public authService: AuthService, private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    if (this.authService.getToken() !== null) {
      this.userService.getUser(this.authService.getToken(), this);
    };
    this.tokenInfor = this.getDecodedAccessToken(this.authService.getToken());
    this.expireDate = this.tokenInfor.exp * 1000;
    if(this.time > this.expireDate) {
      this.authService.removeToken();
    }
  }
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
}
