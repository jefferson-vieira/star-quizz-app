import { applyMiddleware, createStore, combineReducers } from 'redux';

import game from './game';
import status from './status';

import middlewares from '../middlewares';

const reducers = combineReducers({
  game,
  status
});

const store = applyMiddleware(...middlewares)(createStore)(reducers);

export default store;
