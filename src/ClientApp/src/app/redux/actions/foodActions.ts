import { createAction } from '@ngrx/store';
import { ApiAction } from '@redux/interfaces';

export const loadFoods = createAction('[Food] Load');
export const loadFoodsApi: ApiAction = {
  pending: createAction('[Food] Load Pending'),
  success: createAction('[Food] Load Success', foods => ({ payload: foods })),
  failure: createAction('[Food] Load Failure', errorMessage => ({ payload: errorMessage }))
};

export const addFood = createAction('[Food] Add', (name, quantity) => ({ payload: { name, quantity } }));
export const addFoodApi: ApiAction = {
  pending: createAction('[Food] Add Pending'),
  success: createAction('[Food] Add Success'),
  failure: createAction('[Food] Add Failure', errorMessage => ({ payload: errorMessage }))
};
