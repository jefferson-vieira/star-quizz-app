import types from './types';

const setError = status => ({
  type: types.ERROR,
  payload: status
});

const setLoading = status => ({
  type: types.LOADING,
  payload: status
});

export default {
  setError,
  setLoading
};
