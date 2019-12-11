export const bindActionCreator = (store, actionCreator) => (...payload) => {
  const action: any = { type: actionCreator.type };
  if (payload.length === 1) {
    action.payload = payload[0];
  }
  store.dispatch(action);
}
