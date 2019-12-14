import { createReducer } from '@ngrx/store';
import Immutable from 'seamless-immutable';
import { loadFoods, addFood } from '@redux/actions/foodActions';
import { async, createApiReducers } from '@redux/utils';

const initialState = new Immutable({
  foods: [],
  loadFoodsApi: async.default(),
  addFoodApi: async.default()
});

export const foodReducer = createReducer(initialState,
  ...createApiReducers(loadFoods, asyncState => ({ loadFoodsApi: asyncState }), successPayload => ({ foods: successPayload })),
  ...createApiReducers(addFood, asyncState => ({ addFoodApi: asyncState })),
);
