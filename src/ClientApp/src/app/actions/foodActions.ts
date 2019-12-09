import { createAction, props } from '@ngrx/store';

export const loadFoods = createAction('[Food] Load');
export const loadFoodsSuccess = createAction('[Food] Load Success', props<{ payload:any; }>());

export const addFood = createAction('[Food] Add', props<{payload:any;}>());
export const addFoodSuccess = createAction('[Food] Add Success');
