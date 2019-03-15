import http from '@/utils/http';

import { SW_API_URL } from '@/configs';

const getCharacters = (page = 1) => {
  return http.get(`${SW_API_URL}/people?page=${page}`);
};

const getCharacterData = urls => {
  return Promise.all(urls.map(u => http.get(u)));
};

export default {
  getCharacters,
  getCharacterData
};
