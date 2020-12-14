import { Restaurant } from './models/restaurant.model';

export interface AppState {
    readonly restaurant: Restaurant[];
}