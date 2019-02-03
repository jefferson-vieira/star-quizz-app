import http from '../utils/http';

import { SW_API_URL } from '../configs';

const getPeople = (page = 1) => {
  return http.get(`${SW_API_URL}/people?page=${page}`);
};

const getPersonData = url => {
  return Promise.all(url.map(u => http.get(u)));
};

export default {
  getPeople,
  getPersonData
};
