import { createReducer, on } from '@ngrx/store';
import Immutable from 'seamless-immutable';
import { initiateFlow, navigateToBlade } from '@redux/actions/registrationActions';

const initialState = new Immutable({
  flow: [],
  activeBlades: [],
  currentBlade: null
});

export const registrationReducer = createReducer(initialState,
  on(initiateFlow, (state, action) => state.merge({ flow: action.payload, activeBlades: [action.payload[0]], currentBlade: action.payload[0] })),
  on(navigateToBlade, (state, action) => state.merge({ activeBlades: calculateActiveBlades(state, action), currentBlade: findBlade(state.flow, action.payload.nextBladeName) }))
);

const calculateActiveBlades = (state, action) => {
  const { flow, activeBlades } = state;
  const { initiatingBladeName, nextBladeName } = action.payload;

  const initiatingBlade = findBlade(activeBlades, initiatingBladeName);
  const nextBlade = findBlade(flow, nextBladeName);

  const bladesUpToInitiatingBlade = activeBlades.slice(0, activeBlades.indexOf(initiatingBlade) + 1);
  return [...bladesUpToInitiatingBlade, nextBlade];
};

const findBlade = (blades, bladeName) => {
  const blade = blades.find(b => b.name === bladeName);

  if(blade) {
    return blade;
  }

  throw new Error(`Cannot find blade with name '${bladeName}'`);
};
