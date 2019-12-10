import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { FoodService } from 'app/food/food.service';
import { loadFoods, loadFoodsPending, loadFoodsSuccess, loadFoodsFailure, addFood, addFoodPending, addFoodSuccess, addFoodFailure } from 'app/actions/foodActions';

@Injectable()
export class FoodEffects {
  constructor(private store: Store<{food: any}>, private actions$: Actions, private foodService: FoodService) {
  }

  loadFoods$ = createEffect(() => this.actions$.pipe(
    ofType(loadFoods.type),
    tap(() => this.store.next({ type: loadFoodsPending.type })),
    mergeMap(() => this.foodService.getFoods()
      .pipe(
        map(foods => ({ type: loadFoodsSuccess.type, payload: foods })),
        catchError(error => {
          const message = 'Error loading foods';
          return handleError(message, error, loadFoodsFailure.type);
        })
      ))
  ));

  addFood$ = createEffect(() => this.actions$.pipe(
    ofType(addFood.type),
    tap(() => this.store.next({ type: addFoodPending.type })),
    mergeMap((action: any) => this.foodService.addFood(action.payload)
      .pipe(
        map(() => ({ type: addFoodSuccess.type })),
        catchError(error => {
          const message = 'Error adding food';
          return handleError(message, error, addFoodFailure.type);
        })
      ))
  ));

  addFoodSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(addFoodSuccess.type),
    map(() => ({ type: loadFoods.type }))
  ));
}

const handleError = (message, error, type) => {
  console.log(message, error);
  return of({ type: type, payload: message });
};

