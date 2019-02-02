import http from '../utils/http';

const getPeople = () => {
  return http.get('/people');
};

export default {
  getPeople
};
