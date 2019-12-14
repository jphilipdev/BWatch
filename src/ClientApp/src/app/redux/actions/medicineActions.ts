import { createAction } from '@ngrx/store';
import { ApiAction } from '@redux/interfaces';

export const loadMedicines = createAction('[Medicine] Load');
export const loadMedicinesApi: ApiAction = {
  pending: createAction('[Medicine] Load Pending'),
  success: createAction('[Medicine] Load Success', medicines => ({ payload: medicines })),
  failure: createAction('[Medicine] Load Failure', errorMessage => ({ payload: errorMessage }))
};

export const addMedicine = createAction('[Medicine] Add', (name, quantity) => ({ payload: { name, quantity } }));
export const addMedicineApi: ApiAction = {
  pending: createAction('[Medicine] Add Pending'),
  success: createAction('[Medicine] Add Success'),
  failure: createAction('[Medicine] Add Failure', errorMessage => ({ payload: errorMessage }))
};
