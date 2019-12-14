import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { FoodService } from 'app/food/food.service';
import { loadFoods, loadFoodsApi, addFood, addFoodApi } from '@redux/actions/foodActions';
import { createApiEffect } from '@redux/utils';

@Injectable()
export class FoodEffects {
  constructor(private store: Store<{ food: any }>, private actions$: Actions, private foodService: FoodService) {
  }

  loadFoods$ = createApiEffect(this.store, this.actions$, loadFoods, loadFoodsApi, () => this.foodService.getFoods(), 'Error loading foods');

  addFood$ = createApiEffect(this.store, this.actions$, addFood, addFoodApi, payload => this.foodService.addFood(payload), 'Error adding food');

  addFoodSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(addFoodApi.success.type),
    map(() => loadFoods())
  ));
}
