import { applyMiddleware, createStore, combineReducers } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import game from './game';

const reducers = combineReducers({
  game
});

const store = applyMiddleware(promise, thunk)(createStore)(reducers);

export default store;
