import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  password: string;
  repassword: string;
  requireLenght = true;
  email: string;
  checkEmail = true;
  show = false;
  display: boolean;
  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
  }
  register(): void {
    this.show = false;
    this.checkEmail = true;
    this.requireLenght = true;
    if (this.validateEmail(this.email) === false){
      this.checkEmail = false;
    }
    else if (this.password.length < 8) {
      this.requireLenght = false;
    }
    else {
      this.userService.register(this.email.toString(), this.password.toString(), this);
    }
  }
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  redirectToLogin() {
    window.location.replace('/login');
  }
}
