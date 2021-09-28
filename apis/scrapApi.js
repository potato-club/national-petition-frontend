import api from './common';

export const scrapApi = {
  getDetail: async (params) => {
    return await api.get('/petitions', params);
  },
};
