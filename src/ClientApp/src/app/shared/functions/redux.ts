export const bindActionCreator = (store, actionCreator) => (...args) => (store.dispatch(actionCreator(...args)));
