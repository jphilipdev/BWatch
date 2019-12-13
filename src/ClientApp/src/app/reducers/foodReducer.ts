import { createReducer } from '@ngrx/store';
import Immutable from 'seamless-immutable';
import { loadFoodsApi, addFoodApi } from '@actions/foodActions';
import { async, createApiReducers } from '@shared/functions/redux';

const initialState = new Immutable({
  foods: [],
  loadFoodsApi: async.default(),
  addFoodApi: async.default()
});

export const foodReducer = createReducer(initialState,
  ...createApiReducers(loadFoodsApi, asyncState => ({ loadFoodsApi: asyncState }), successPayload => ({ foods: successPayload })),
  ...createApiReducers(addFoodApi, asyncState => ({ addFoodApi: asyncState })),
);
