import { on, On } from '@ngrx/store';
import { ApiAction } from '@shared/interfaces/redux';

export const bindActionCreator = (store, actionCreator) => (...args) => (store.dispatch(actionCreator(...args)));

export const async = {
  default: () => ({ ...asyncStates.default }),
  pending: () => ({ ...asyncStates.pending }),
  success: () => ({ ...asyncStates.success }),
  failure: (errorMessage) => ({ ...asyncStates.failure, errorMessage })
};

const asyncStates = {
  default: {
    pending: false,
    success: false,
    failure: false,
    errorMessage: null
  },
  pending: {
    pending: true,
    success: false,
    failure: false,
    errorMessage: null
  },
  success: {
    pending: false,
    success: true,
    failure: false,
    errorMessage: null
  },
  failure: {
    pending: false,
    success: false,
    failure: true
  }
};

export const createApiReducers = (apiAction: ApiAction, createAsyncState, createSuccessState?): On<any>[] => {
  return [
    on(apiAction.pending, (state) => state.merge(createAsyncState(async.pending()))),
    on(apiAction.success, (state, action: any) => state.merge(createAsyncState(async.success())).merge(createSuccessState ? createSuccessState(action.payload) : {})),
    on(apiAction.failure, (state, action: any) => state.merge(createAsyncState(async.failure(action.payload)))),
  ];
};
