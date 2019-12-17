import { createReducer, on } from '@ngrx/store';
import Immutable from 'seamless-immutable';
import { bladeSelected } from '@redux/actions/registrationActions';

const initialState = new Immutable({
  activeBlades: [],
  currentBlade: null
});

export const registrationReducer = createReducer(initialState,
  on(bladeSelected, (state, action) => state.merge({ activeBlades: getActiveBlades(state.activeBlades, action.payload), currentBlade: action.payload }))
);

const getActiveBlades = (activeBlades: [any], selectedBlade) => {
  var bladesUpToSelectedBlade = activeBlades.slice(0, activeBlades.indexOf(selectedBlade));
  return [...bladesUpToSelectedBlade, selectedBlade];
}
