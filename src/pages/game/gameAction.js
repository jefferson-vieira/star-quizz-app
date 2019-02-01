import * as service from '../../services/swapi';

export async function getPeople() {
  return async dispatch => {
    try {
      const { data } = await service.getPeople();
      dispatch({
        type: 'PEOPLE_FETCHED',
        payload: data
      });
    } catch (error) {
      console.log(error)
    }
  };
}
