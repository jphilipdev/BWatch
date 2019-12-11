export const bindActionCreator = (store, actionCreator) => (...args) => (store.dispatch(actionCreator(...args)));

export const async = {
  default: () => ({ ... asyncStates.default }),
  pending: () => ({ ... asyncStates.pending }),
  success: () => ({ ... asyncStates.success }),
  failure: (errorMessage) => ({ ... asyncStates.failure, errorMessage })
};

const asyncStates = {
  default: {
    pending: false,
    success: false,
    failure: false,
    errorMessage: null
  },
  pending: {
    pending: true,
    success: false,
    failure: false,
    errorMessage: null
  },
  success: {
    pending: false,
    success: true,
    failure: false,
    errorMessage: null
  },
  failure: {
    pending: false,
    success: false,
    failure: true
  }
};
