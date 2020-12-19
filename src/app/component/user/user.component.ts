import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  password: string;
  repassword: string;
  equalPassword = true;
  constructor() { }

  ngOnInit(): void {
  }
  changePassword(): void {
    if (this.password !== this.repassword){
      this.equalPassword = false;
    }
  }
}
