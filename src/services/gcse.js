import http from '@/utils/http';

import {
  GOOLE_API_URL,
  GOOLE_FILTERS,
  GOOLE_KEY,
  GOOLE_CX_KEY
} from '@/configs';

const getImage = name => {
  return http.get(
    GOOLE_API_URL + name + GOOLE_FILTERS + GOOLE_KEY + GOOLE_CX_KEY
  );
};

const getImageListForAll = names => {
  return Promise.all(names.map(n => getImage(n)));
};

export default {
  getImage,
  getImageListForAll
};
