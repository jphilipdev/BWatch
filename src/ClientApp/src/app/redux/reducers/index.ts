import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { foodReducer } from './foodReducer';
import { medicineReducer } from './medicineReducer';
import { registrationReducer } from './registrationReducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  food: foodReducer,
  medicine: medicineReducer,
  registration: registrationReducer
};


export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [];
