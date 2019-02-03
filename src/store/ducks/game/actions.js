import types from './types';

const isLoading = () => ({
  type: types.PEOPLE_FETCHING
});

const getPeople = data => ({
  type: types.PEOPLE_FETCHED,
  payload: data
});

export default {
  isLoading,
  getPeople
};
