import types from './types';

const INITIAL_STATE = {
  loading: true,
  error: false,
  people: [],
  score: 0
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PEOPLE_FETCHING:
      return { ...state, loading: true, error: false };
    case types.PEOPLE_FETCH_ERROR:
      return { ...state, loading: false, error: true };
    case types.PEOPLE_FETCHED:
      return { ...state, loading: false, error: false, people: action.payload };
    case types.VALIDATE_ANSWER:
      return { ...state, score: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
