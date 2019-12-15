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
  failure: error => ({ ...asyncStates.failure, error })
};

const asyncStates = {
  default: {
    pending: false,
    success: false,
    failure: false,
    error: null
  },
  pending: {
    pending: true,
    success: false,
    failure: false,
    error: null
  },
  success: {
    pending: false,
    success: true,
    failure: false,
    error: null
  },
  failure: {
    pending: false,
    success: false,
    failure: true
  }
};

export const createApiReducers = (apiAction: ApiAction, createAsyncState, createSuccessState?): On<any>[] => {
  return [
    on(apiAction.request, (state) => state.merge(createAsyncState(async.default()))),
    on(apiAction.pending, (state) => state.merge(createAsyncState(async.pending()))),
    on(apiAction.success, (state, action: any) => state.merge(createAsyncState(async.success())).merge(createSuccessState ? createSuccessState(action.payload) : {})),
    on(apiAction.failure, (state, action: any) => state.merge(createAsyncState(async.failure(action.payload)))),
  ];
};

export const createApiEffect = (store, actions, apiAction: ApiAction, apiCall, error) => createEffect(() => actions.pipe(
  ofType(apiAction.request.type),
  tap(() => store.next(apiAction.pending())),
  mergeMap((action: any) => apiCall(action.payload)
    .pipe(
      map(payload => apiAction.success(payload)),
      catchError(response => handleError(error, response, apiAction.failure))
    ))
));

const handleError = (message, response, failureAction) => {
  console.log(message, response);
  return of(failureAction(response.error));
};
