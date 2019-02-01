const INITIAL_STATE = {
  people: []
};

export default function game(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PEOPLE_FETCHED':
      return { ...state, people: action.payload };
    default:
      return state;
  }
}
