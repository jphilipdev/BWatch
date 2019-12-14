import { createAction } from '@ngrx/store';
import { ApiAction } from '@redux/interfaces';

export const loadFoods: ApiAction = {
  request: createAction('[Food] Load Request'),
  pending: createAction('[Food] Load Pending'),
  success: createAction('[Food] Load Success', foods => ({ payload: foods })),
  failure: createAction('[Food] Load Failure', errorMessage => ({ payload: errorMessage }))
};

export const addFood: ApiAction = {
  request: createAction('[Food] Add Request', (name, quantity) => ({ payload: { name, quantity } })),
  pending: createAction('[Food] Add Pending'),
  success: createAction('[Food] Add Success'),
  failure: createAction('[Food] Add Failure', errorMessage => ({ payload: errorMessage }))
};
