import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Restaurant } from '../models/restaurant.model';

export const addRestaurant = '[Restaurant] Add'
export const removeRestaurant = '[Restaurant] Remove'

export class AddRestaurant implements Action {
    readonly type = addRestaurant
    constructor(public payload: Restaurant){}

}
export class RemoveRestaurant implements Action {
    readonly type = removeRestaurant
    constructor(public payload: number){}

}

export type Actions = AddRestaurant | RemoveRestaurant
