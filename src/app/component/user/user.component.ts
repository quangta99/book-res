import { BookingService } from './../../services/booking.service';
import { Booking, Ticket } from './../../models/booking';
import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  password: string;
  repassword: string;
  oldpassword: string;
  equalPassword = true;
  requireLenght = true;
  newEmail: string;
  user = new User();
  temp = new User();
  displayNotiPass: boolean;
  displayNotiEmail: boolean;
  checkEmail = true;
  tickets = new Array<Ticket>();
  loading: boolean;
  constructor(public userService: UserService, public authService: AuthService, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.loading = false;
    this.displayNotiEmail = false;
    this.bookingService.getBookings(this);
    this.displayNotiPass = false;
    if (this.authService.getToken() !== null){
      this.userService.getUser(this.authService.getToken(), this);
    }
    else if (this.authService.getToken() === null){
      window.location.replace('/home');
    }
  }
  changeEmail(): void {
    if (this.validateEmail(this.newEmail) !== false) {
      this.userService.changeEmail(this.newEmail, this.user.email, this);
    }
    else{
      this.checkEmail = false;
    }
  }
  changePassword(): void {
    this.equalPassword = true;
    if (this.password !== this.repassword) {
      this.equalPassword = false;
    }
    else if (this.password.length < 8) {
      this.requireLenght = false;
    }
    else {
      this.userService.changePassword(this.password, this.oldpassword, this);
    }
  }
  redirectToLogin() {
    this.authService.removeToken();
    window.location.replace('/login');
  }
  reload(){
    window.location.reload();
  }
  LogOut(): void {
    this.authService.removeToken();
  }
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  ChangeInfor() {
    if (this.temp.name === undefined){
      this.temp.name = this.user.name;
    }
    if (this.temp.phone === undefined){
      this.temp.phone = this.user.phone;
    }
    if (this.temp.street === undefined){
      this.temp.street = this.user.street;
    }
    if (this.temp.ward === undefined){
      this.temp.ward = this.user.ward;
    }
    if (this.temp.district === undefined){
      this.temp.district = this.user.district;
    }
    this.temp.email = this.user.email;
    this.userService.changeInfor(this.temp, this);
  }
}
