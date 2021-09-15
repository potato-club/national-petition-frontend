import axios from 'axios';
import { settings } from 'constants/index';

const authorization = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default {
  get: async (url, authYn) => {
    return authYn
      ? axios.get(
          settings.testUrl + url,
          // authorization(await tokenHelper.getIdToken()),
        )
      : axios.get(settings.testUrl + url);
  },
  post: async (url, req, authYn) => {
    return authYn
      ? axios.post(
          settings.testUrl + url,
          req,
          // authorization(await tokenHelper.getIdToken()),
        )
      : axios.post(settings.testUrl + url, req);
  },
};
