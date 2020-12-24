import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  localStorage: Storage;
  show = false;
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.getToken() !== null){
      window.location.replace('/home');
    }
  }
  Login(): void {
    this.userService.login(this.email, this.password, this);
  }
}
