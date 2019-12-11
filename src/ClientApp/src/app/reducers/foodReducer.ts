import { createReducer, on } from '@ngrx/store';
import { loadFoodsPending, loadFoodsSuccess, loadFoodsFailure, addFoodPending, addFoodSuccess, addFoodFailure } from '@actions/foodActions';
import { async } from '@shared/functions/redux';

const initialState = {
  foods: [],
  loadFoodsApi: async.default(),
  addFoodApi: async.default()
};

export const foodReducer = createReducer(initialState,
  on(loadFoodsPending, (state) => ({ ...state, loadFoodsApi: async.pending() })),
  on(loadFoodsSuccess, (state, action) => ({ ...state, foods: action.payload, loadFoodsApi: async.success() })),
  on(loadFoodsFailure, (state, action) => ({ ...state, loadFoodsApi: async.failure(action.payload) })),

  on(addFoodPending, (state) => ({ ...state, addFoodApi: async.pending() })),
  on(addFoodSuccess, (state) => ({ ...state, addFoodApi: async.success() })),
  on(addFoodFailure, (state, action) => ({ ...state, addFoodApi: async.failure(action.payload) }))
);
