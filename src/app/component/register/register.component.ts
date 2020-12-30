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
  requireLenght: boolean = false;
  email: string;
  checkEmail = true;
  show = false;
  display: boolean;
  loading: boolean;
  error: boolean = false;
  requireSpecialCharacter: boolean = false;
  require = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;
  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
    this.error = false;
    this.loading = false;
  }
  register(): void {
    this.error = false;
    this.requireSpecialCharacter = false
    this.show = false;
    this.checkEmail = true;
    this.requireLenght = false;
    if (this.validateEmail(this.email) === false){
      this.checkEmail = false;
    }
    else if (this.password.length < 8) {
      this.requireLenght = true;
    }
    else if(!this.password.match(this.require)) {
      this.requireSpecialCharacter = true;
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
