import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FoodService } from 'app/food/food.service';
import { loadFoods, loadFoodsSuccess, addFood, addFoodSuccess } from 'app/actions/foodActions';

@Injectable()
export class FoodEffects {
  constructor(private actions$: Actions, private foodService: FoodService) {
  }

  loadFoods$ = createEffect(() => this.actions$.pipe(
    ofType(loadFoods.type),
    mergeMap(() => this.foodService.getFoods()
      .pipe(
        map(foods => ({ type: loadFoodsSuccess.type, payload: foods })),
        catchError(() => EMPTY)
      ))
  ));

  addFood$ = createEffect(() => this.actions$.pipe(
    ofType(addFood.type),
    mergeMap((action:any) => this.foodService.addFood(action.payload)
      .pipe(
        map(() => ({ type: addFoodSuccess.type })),
        catchError(() => EMPTY)
      ))
  ));

  addFoodSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(addFoodSuccess.type),
    map(() => ({ type: loadFoods.type }))
  ));
}


