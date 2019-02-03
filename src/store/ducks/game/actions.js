import types from './types';

const isLoading = () => ({
  type: types.PEOPLE_FETCHING
});

const getPeople = data => ({
  type: types.PEOPLE_FETCHED,
  payload: data
});

const validateAnswer = newScore => ({
  type: types.VALIDATE_ANSWER,
  payload: newScore
});

export default {
  isLoading,
  getPeople,
  validateAnswer
};
