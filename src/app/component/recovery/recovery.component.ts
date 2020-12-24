import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  email: string;
  check: boolean;
  checkEmail = true;
  password: string;
  repassword: string;
  activeToken: string;
  checkExistEmail: boolean;
  display: boolean;
  checkToken: boolean;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.check = false;
    this.checkExistEmail = true;
    this.display = false;
    this.checkToken = true;
  }
  recovery(){
    if (this.validateEmail(this.email) === false) {
      this.checkEmail = false;
    }
    else {
      this.userService.recovery(this.email, this);
    }
  }
  redirectToLogin() {
    window.location.replace('/login');
  }
  changePasswordWithReco(){
    if (this.activeToken !== null && this.password.length > 8 && this.password === this.repassword) {
      this.userService.changePasswordWithRecovery(this.activeToken, this.email, this.password, this);
    }
  }
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
