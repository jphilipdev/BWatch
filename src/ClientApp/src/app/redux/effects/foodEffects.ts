import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { FoodService } from 'app/food/food.service';
import { loadFoods, loadFoodsApi, addFood, addFoodApi } from '@redux/actions/foodActions';

@Injectable()
export class FoodEffects {
  constructor(private store: Store<{food: any}>, private actions$: Actions, private foodService: FoodService) {
  }

  loadFoods$ = createEffect(() => this.actions$.pipe(
    ofType(loadFoods.type),
    tap(() => this.store.next(loadFoodsApi.pending())),
    mergeMap(() => this.foodService.getFoods()
      .pipe(
        map(foods => loadFoodsApi.success(foods)),
        catchError(error => {
          const message = 'Error loading foods';
          return handleError(message, error, loadFoodsApi.failure);
        })
      ))
  ));

  addFood$ = createEffect(() => this.actions$.pipe(
    ofType(addFood.type),
    tap(() => this.store.next(addFoodApi.pending())),
    mergeMap((action: any) => this.foodService.addFood(action.payload)
      .pipe(
        map(() => addFoodApi.success()),
        catchError(error => {
          const message = 'Error adding food';
          return handleError(message, error, addFoodApi.failure);
        })
      ))
  ));

  addFoodSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(addFoodApi.success.type),
    map(() => loadFoods())
  ));
}

const handleError = (message, error, actionCreator) => {
  console.log(message, error);
  return of(actionCreator(error.message));
};
