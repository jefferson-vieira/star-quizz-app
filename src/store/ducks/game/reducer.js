import types from './types';

const INITIAL_STATE = {
  characters: [],
  answers: []
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_CHARACTERS_SUCCESS:
      return { ...state, characters: action.payload };
    case types.SET_ANSWER:
      return { ...state, answers: action.payload };
    case types.RESET:
      return { ...state, answers: INITIAL_STATE.answers };
    default:
      return state;
  }
};

export default gameReducer;
