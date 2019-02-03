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

  try {
    const { data } = await swapiService.getPeople(page);

    await Promise.all(
      ...data.results.map(person => [
        // gcseService.getImage(person.name).then(data => {
        //   person.imgurl = data.data.items.shift().link;
        //   console.log('i', person.imgurl)
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

    console.log('d', data)

    dispatch(actions.getPeople(data));
  } catch (error) {
    dispatch(actions.hasError());
  }
};

const validateAnswer = usesHelp => (dispatch, getState) => {
  const newScore =
    getState().game.score +
    (usesHelp ? ANSWER_POINTS_WITH_HELP : ANSWER_POINTS);

  dispatch(actions.validateAnswer(newScore));
};

export default {
  ...actions,
  getPeople,
  validateAnswer
};
