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
  constructor() { }

  ngOnInit(): void {
  }
  checkEqualPassword(): void {
    if (this.password !== this.repassword) {
      this.equalPassword = false;
    }
    else {

    }
  }
}
