import types from './types';

const INITIAL_STATE = {
  people: []
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PEOPLE_FETCHED:
      return { ...state, people: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
