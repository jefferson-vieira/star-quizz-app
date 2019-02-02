import types from './types';

const getPeople = data => ({
  type: types.PEOPLE_FETCHED,
  payload: data
});

export default {
  getPeople
};
