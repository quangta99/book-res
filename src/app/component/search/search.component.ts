import { RestaurantService } from './../../services/restaurant.service';
import { RestaurantInformation } from './../../models/restaurant';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  restaurants: Array<RestaurantInformation>;
  result: boolean;
  search: string;
  sub: any;
  constructor(private activatedRoute: ActivatedRoute, private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit(): void {
    this.result = true;
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.search = params['search'];
      this.restaurantService.getType('', this.search, this);
    });
  }
  viewRestaurant(id, item: RestaurantInformation){
    this.router.navigate(['/book', id, JSON.stringify(item)]);
  }

}
