import { createReducer, on } from '@ngrx/store';
import Immutable from 'seamless-immutable';
import { bladeSelected } from '@redux/actions/registrationActions';

const initialState = new Immutable({
  activeBlades: [],
  currentBlade: null
});

export const registrationReducer = createReducer(initialState,
  on(bladeSelected, (state, action) => state.merge({ activeBlades: [...state.activeBlades, action.payload], currentBlade: action.payload }))
);
