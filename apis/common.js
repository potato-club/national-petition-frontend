import axios from 'axios';
import { settings } from 'constants/index';
import { tokenHelper } from 'util/index';

export default {
  authGet: async (url, params) => {
    return axios.get(settings.testUrl + url, {
      params,
      headers: {
        Authorization: `Bearer ${await tokenHelper.getIdToken()}`,
      },
    });
  },
  get: async (url, params) => {
    return axios.get(settings.testUrl + url, { params });
  },
  authPost: async () => {
    return axios.post(settings.testUrl + url, params, {
      headers: {
        Authorization: `Bearer ${await tokenHelper.getIdToken()}`,
      },
    });
  },
  post: async (url, authYn, params) => {
    return axios.post(settings.testUrl + url, params);
  },
  authTextPut: async (url, params) => {
    return await axios({
      method: 'put',
      url: settings.testUrl + url,
      data: params,
      headers: {
        Authorization: `Bearer ${await tokenHelper.getIdToken()}`,
      },
    });
  },
  authDelete: async (url, params) => {
    return await axios({
      method: 'delete',
      url: settings.testUrl + url,
      data: params,
      headers: {
        Authorization: `Bearer ${await tokenHelper.getIdToken()}`,
      },
    });
  },
};
