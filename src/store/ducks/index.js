import { applyMiddleware, createStore, combineReducers } from 'redux';

import game from './game';
import status from './status';

import middlewares from '../middlewares';

const reducers = combineReducers({
  game,
  status
});

const reduxDevTools =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(...middlewares)(createStore)(
  reducers,
  reduxDevTools
);

export default store;
