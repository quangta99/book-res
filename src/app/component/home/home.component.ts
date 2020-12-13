import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';
import { Restaurant } from './../../models/restaurant.model';
import { AppState } from './../../app.state';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  restaurants: Observable<Restaurant[]>;

  constructor(private store: Store<AppState>) {
    this.restaurants = store.select('restaurant');
   }

  ngOnInit(): void {
  }

}
