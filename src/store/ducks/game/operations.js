import actions from './actions';

import swapiService from '../../../services/swapi';
import gcseService from '../../../services/gcse';

import { ANSWER_POINTS, ANSWER_POINTS_WITH_HELP } from '../../../configs/index';

const getName = data => data.map(d => d.data.name);

/**
 * Needs refactor?
 */
const getPeople = page => async dispatch => {
  dispatch(actions.isLoading());

  const { data } = await swapiService.getPeople(page);

  await Promise.all(
    ...data.results.map(person => [
      // gcseService.getImage(person.name).then(data => {
      //   person.imgurl = data.items.link.shift();
      // }),
      swapiService.getPersonData([person.homeworld]).then(data => {
        person.homeworld = getName(data);
      }),
      swapiService.getPersonData(person.species).then(data => {
        person.species = getName(data);
      }),
      swapiService.getPersonData(person.starships).then(data => {
        person.starships = getName(data).join(', ');
      }),
      swapiService.getPersonData(person.vehicles).then(data => {
        person.vehicles = getName(data).join(', ');
      })
    ])
  );

  dispatch(actions.getPeople(data));
};

const validateAnswer = usesHelp => (dispatch, getState) => {
  const newPoints =
    getState().game.points +
    (usesHelp ? ANSWER_POINTS_WITH_HELP : ANSWER_POINTS);

  dispatch(actions.validateAnswer(newPoints));
};

export default {
  ...actions,
  getPeople,
  validateAnswer
};