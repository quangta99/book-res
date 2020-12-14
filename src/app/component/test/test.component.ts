import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';
import { Restaurant } from './../../models/restaurant.model';
import { AppState } from './../../app.state';
import * as RestaurantActions from './../../actions/restaurant.actions'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  
  addRes(name, address, img) {
    this.store.dispatch(new RestaurantActions.AddRestaurant({name:name, address:address, img:img}))
  }

  ngOnInit(): void {
  }

}
