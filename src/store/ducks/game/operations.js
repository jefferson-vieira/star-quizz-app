import actions from './actions';

import swapiService from '../../../services/swapi';
import gcseService from '../../../services/gcse';

const getName = data => data.map(d => d.data.name);

/**
 * Needs refactor?
 */
const getPeople = page => async dispatch => {
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

export default {
  ...actions,
  getPeople
};
