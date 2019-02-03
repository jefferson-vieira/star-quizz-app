import types from './types';

const isLoading = () => ({
  type: types.PEOPLE_FETCHING
});

const getPeople = data => ({
  type: types.PEOPLE_FETCHED,
  payload: data
});

const validateAnswer = newPoints => ({
  type: types.VALIDATE_ANSWER,
  payload: newPoints
});

export default {
  isLoading,
  getPeople,
  validateAnswer
};
