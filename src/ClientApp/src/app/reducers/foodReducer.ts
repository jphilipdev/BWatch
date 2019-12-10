import { createReducer, on } from '@ngrx/store';
import { loadFoodsPending, loadFoodsSuccess, loadFoodsFailure, addFoodPending, addFoodSuccess, addFoodFailure } from '@actions/foodActions';

const asyncDefault = {
  pending: false,
  success: false,
  failure: false,
  errorMessage: null
};

const asyncPending = {
  pending: true,
  success: false,
  failure: false,
  errorMessage: null
};

const asyncSuccess = {
  pending: false,
  success: true,
  failure: false,
  errorMessage: null
};

const asyncFailure = {
  pending: false,
  success: false,
  failure: true
};

const initialState = {
  foods: [],
  loadFoods: { ...asyncDefault },
  addFood: { ...asyncDefault }
};

const _foodReducer = createReducer(initialState,
  on(loadFoodsPending, (state) => ({ ...state, loadFoods: { ...asyncPending } })),
  on(loadFoodsSuccess, (state, action) => ({ ...state, foods: action.payload, loadFoods: { ...asyncSuccess } })),
  on(loadFoodsFailure, (state, action) => ({ ...state, loadFoods: { ...asyncFailure, errorMessage: action.payload } })),

  on(addFoodPending, (state) => ({ ...state, addFood: { ...asyncPending } })),
  on(addFoodSuccess, (state) => ({ ...state, addFood: { ...asyncSuccess } })),
  on(addFoodFailure, (state, action) => ({ ...state, addFood: { ...asyncFailure, errorMessage: action.payload } }))
);

export function foodReducer(state, action) {
  return _foodReducer(state, action);
}
