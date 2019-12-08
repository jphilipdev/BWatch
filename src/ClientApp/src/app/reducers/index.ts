import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { foodReducer } from './foodReducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  food: foodReducer
};


export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [];
