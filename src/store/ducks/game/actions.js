import types from './types';

const fetchCharactersRequest = () => ({
  type: types.FETCH_CHARACTERS_REQUEST
});

const fetchCharactersSuccess = data => ({
  type: types.FETCH_CHARACTERS_SUCCESS,
  payload: data
});

const fetchCharactersFailure = error => ({
  type: types.FETCH_CHARACTERS_FAILURE,
  payload: error
});

const setAnswer = answer => ({
  type: types.SET_ANSWER,
  payload: answer
});

export default {
  fetchCharactersRequest,
  fetchCharactersSuccess,
  fetchCharactersFailure,
  setAnswer
};
