import { createReducer } from '@ngrx/store';
import Immutable from 'seamless-immutable';
import { async, createApiReducers } from '@redux/utils';
import { loadMedicinesApi, addMedicineApi } from '@redux/actions/medicineActions';

const initialState = new Immutable({
  medicines: [],
  loadMedicinesApi: async.default(),
  addMedicineApi: async.default()
});

export const medicineReducer = createReducer(initialState,
  ...createApiReducers(loadMedicinesApi, asyncState => ({ loadMedicinesApi: asyncState }), successPayload => ({ medicines: successPayload })),
  ...createApiReducers(addMedicineApi, asyncState => ({ addMedicineApi: asyncState }))
);
