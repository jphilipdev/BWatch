import { createAction } from '@ngrx/store';

export const bladeSelected = createAction('[Registration] Navigate', navigationAction => ({ payload: navigationAction }));
