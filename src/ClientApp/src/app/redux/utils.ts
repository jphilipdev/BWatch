import { on, On } from '@ngrx/store';
import { ApiAction } from '@redux/interfaces';
import { createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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

export const createApiEffect = (store, actions, triggeringAction, apiAction: ApiAction, apiCall, errorMessage) => createEffect(() => actions.pipe(
  ofType(triggeringAction.type),
  tap(() => store.next(apiAction.pending())),
  mergeMap((action: any) => apiCall(action.payload)
    .pipe(
      map(payload => apiAction.success(payload)),
      catchError(error => {
        return handleError(errorMessage, error, apiAction.failure);
      })
    ))
));

const handleError = (message, error, actionCreator) => {
  console.log(message, error);
  return of(actionCreator(error.message));
};
