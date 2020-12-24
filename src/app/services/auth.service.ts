import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  localStorage: Storage;
  constructor() { }
  public getToken(): string {
    return localStorage.getItem('token');
  }
  public setToken(token: string) {
    localStorage.setItem('token', token);
  }
  public removeToken() {
    localStorage.clear();
    window.location.replace('/home');
  }
}
