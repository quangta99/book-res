import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';
import { Restaurant } from './../../models/restaurant.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  restaurants: Observable<Restaurant[]>;

  constructor() {
   }

  ngOnInit(): void {
  }

}
