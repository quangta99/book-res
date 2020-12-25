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
  error: boolean;
  loading: boolean;
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loading = false;
    this.error = false;
    if(this.authService.getToken() !== null){
      window.location.replace('/home');
    }
  }
  Login(): void {
    this.error = false;
    this.show = false;
    this.userService.login(this.email, this.password, this);
  }
}
