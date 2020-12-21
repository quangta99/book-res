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
  equalPassword: false;
  email: string;
  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
  }
  checkEqualPassword(): void {
    if (this.password !== this.repassword) {
    }
    else {
      this.userService.register(this.email, this.password);
    }
  }
}
