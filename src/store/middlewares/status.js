import { actions } from '../ducks/status';

const setStatus = (loading, error) => [
  actions.setLoading(loading),
  actions.setError(error)
];

export default store => next => action => {
  if (action.type.includes('REQUEST')) {
    store.dispatch(setStatus(true, false));
  } else if (action.type.includes('SUCCESS')) {
    store.dispatch(setStatus(false, false));
  } else if (action.type.includes('FAILURE')) {
    store.dispatch(setStatus(false, action.payload));
  }
  next(action);
};
