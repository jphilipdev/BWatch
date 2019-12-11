import { createAction, props } from '@ngrx/store';

export const loadFoods = createAction('[Food] Load');
export const loadFoodsPending = createAction('[Food] Load Pending');
export const loadFoodsSuccess = createAction('[Food] Load Success', foods => ({ payload: foods }));
export const loadFoodsFailure = createAction('[Food] Load Failure', errorMessage => ({ payload: errorMessage }));

export const addFood = createAction('[Food] Add', (name, quantity) => ({ payload: { name, quantity } }));
export const addFoodPending = createAction('[Food] Add Pending');
export const addFoodSuccess = createAction('[Food] Add Success');
export const addFoodFailure = createAction('[Food] Add Failure', errorMessage => ({ payload: errorMessage }));
