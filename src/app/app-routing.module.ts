import { AboutUsComponent } from './component/about-us/about-us.component';
import { BookComponent } from './component/book/book.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './component/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',             component: HomeComponent },
  { path: 'login',            component: LoginComponent },
  { path: 'book',             component: BookComponent},
  { path: 'register',         component: RegisterComponent},
  { path: 'about',            component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
