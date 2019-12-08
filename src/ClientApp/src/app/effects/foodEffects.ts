import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FoodService } from 'app/food/food.service';
import { loadFoods, loadFoodsSuccess } from 'app/actions/foodActions';

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
  ))
}
