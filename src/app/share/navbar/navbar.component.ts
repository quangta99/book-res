import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  user = new User();
  constructor(public userService: UserService, public authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.getToken() !== null) {
      this.userService.getUser(this.authService.getToken(), this);
    }
  }
}
