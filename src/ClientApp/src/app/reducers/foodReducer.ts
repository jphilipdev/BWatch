import { createReducer, on } from '@ngrx/store';
import { loadFoods, loadFoodsSuccess } from '@actions/foodActions';

const initialState = { foods: []};

 const _foodReducer = createReducer(initialState,
   on(loadFoodsSuccess, (state, updatedValue) => ({ ...state, foods: updatedValue.payload }))
 );

 export function foodReducer(state, action) {
   return _foodReducer(state, action);
 }
