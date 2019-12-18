import { createAction } from '@ngrx/store';

export const initiateFlow = createAction('[Registration] Initiate', flow => ({ payload: flow }));
export const navigateToBlade = createAction('[Registration] Navigate', (initiatingBladeName, nextBladeName) => ({ payload: { initiatingBladeName, nextBladeName } }));
