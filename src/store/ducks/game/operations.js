import actions from './actions';

import service from '../../../services/swapi';

const getPeople = () => async dispatch => {
  const { data } = await service.getPeople();
  dispatch(actions.getPeople(data));
};

export default {
  ...actions,
  getPeople
};
