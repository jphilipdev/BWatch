import { createAction, props } from '@ngrx/store';

export const loadFoods = createAction('[Food] Load');
export const loadFoodsSuccess = createAction('[Food] Load Success', props<{ payload:any; }>());
