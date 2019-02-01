import http from '../utils/http';

export function getPeople() {
  return http.get('/people');
}
