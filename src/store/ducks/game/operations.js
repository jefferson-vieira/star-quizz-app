import actions from './actions';

import swapiService from '@/services/swapi';
import gcseService from '@/services/gcse';

import { ANSWER_POINTS, ANSWER_POINTS_WITH_HELP } from '@/configs';

const getName = resp => resp.map(r => r.data.name);

const fetchCharacters = page => async (dispatch, getState) => {
  try {
    dispatch(actions.fetchCharactersRequest());

    const { data } = await swapiService.getCharacters(page);

    await Promise.all(
      data.results
        .map(character => [
          gcseService.getImage(character.name).then(resp => {
            character.imgsrc = resp.data.items.shift().link;
          }),
          swapiService.getCharacterData([character.homeworld]).then(resp => {
            character.homeworld = getName(resp);
          }),
          swapiService.getCharacterData(character.species).then(resp => {
            character.species = getName(resp);
          }),
          swapiService.getCharacterData(character.starships).then(resp => {
            character.starships = getName(resp).join(', ');
          }),
          swapiService.getCharacterData(character.vehicles).then(resp => {
            character.vehicles = getName(resp).join(', ');
          })
        ])
        .reduce((a, b) => a.concat(b))
    );

    const characters = [...getState().game.characters];
    characters[page] = data;

    dispatch(actions.fetchCharactersSuccess(characters));
  } catch (error) {
    dispatch(actions.fetchCharactersFailure(error));
  }
};

const validateAnswer = (page, id, answer, help) => (dispatch, getState) => {
  const answers = [...getState().game.answers];
  const pageAnswers = answers[page] || [];
  pageAnswers[id] = {
    answer,
    score: help ? ANSWER_POINTS_WITH_HELP : ANSWER_POINTS
  };
  answers[page] = pageAnswers;

  dispatch(actions.setAnswer(answers));
};

export default {
  fetchCharacters,
  validateAnswer
};
