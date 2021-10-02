import axios from 'axios';
import { settings } from 'constants/index';
import { tokenHelper } from 'util/index';

export default {
  authGet: async (url, params) => {
    return axios.get(settings.apiUrl + url, {
      params,
      headers: {
        Authorization: `Bearer ${await tokenHelper.getIdToken()}`,
      },
    });
  },
  get: async (url, params) => {
    return axios.get(settings.apiUrl + url, { params });
  },
  authPost: async (url, params) => {
    return axios.post(settings.apiUrl + url, params, {
      headers: {
        Authorization: `Bearer ${await tokenHelper.getIdToken()}`,
      },
    });
  },
  post: async (url, authYn, params) => {
    return axios.post(settings.apiUrl + url, params);
  },
  authTextPut: async (url, params) => {
    return await axios({
      method: 'put',
      url: settings.apiUrl + url,
      data: params,
      headers: {
        Authorization: `Bearer ${await tokenHelper.getIdToken()}`,
      },
    });
  },
  authDelete: async (url, params) => {
    return await axios({
      method: 'delete',
      url: settings.apiUrl + url,
      data: params,
      headers: {
        Authorization: `Bearer ${await tokenHelper.getIdToken()}`,
      },
    });
  },
};
