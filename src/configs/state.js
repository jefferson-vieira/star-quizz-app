import { combineReducers } from 'redux';

import gameReducer from '../pages/game/gameReducer';

const rootReducer = combineReducers({
  game: gameReducer
});

export default rootReducer;
