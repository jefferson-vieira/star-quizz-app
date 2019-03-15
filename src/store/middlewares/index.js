import multi from 'redux-multi'
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import status from './status';

export default [multi, promise, thunk, status];
