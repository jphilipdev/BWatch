import { createAction } from '@ngrx/store';
import { ApiAction } from '@redux/interfaces';

export const loadMedicines: ApiAction = {
  request: createAction('[Medicine] Load Request'),
  pending: createAction('[Medicine] Load Pending'),
  success: createAction('[Medicine] Load Success', medicines => ({ payload: medicines })),
  failure: createAction('[Medicine] Load Failure', errorMessage => ({ payload: errorMessage }))
};

export const addMedicine: ApiAction = {
  request: createAction('[Medicine] Add Request', (name, quantity) => ({ payload: { name, quantity } })),
  pending: createAction('[Medicine] Add Pending'),
  success: createAction('[Medicine] Add Success'),
  failure: createAction('[Medicine] Add Failure', errorMessage => ({ payload: errorMessage }))
};
