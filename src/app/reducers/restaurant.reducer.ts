import { Restaurant } from './../models/restaurant.model';
import { Action } from '@ngrx/store';
import * as RestaurantActions from './../actions/restaurant.actions'

const initialState: Restaurant = {
    name:'Default Restaurant',
    address:'Default',
    img:'https://images.foody.vn/res/g103/1027482/prof/s380x244/foody-upload-api-foody-mobile-13-200708160500.jpg'
}

export function reducer(state: Restaurant[] = [initialState], action: RestaurantActions.Actions) {
    switch(action.type){
        case RestaurantActions.addRestaurant:
            return [...state, action.payload];
        default:
            return state;
    }
}