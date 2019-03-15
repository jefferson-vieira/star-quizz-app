import types from './types';

const INITIAL_STATE = {
  error: false,
  loading: false
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ERROR:
      return { ...state, error: action.payload };
    case types.LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
