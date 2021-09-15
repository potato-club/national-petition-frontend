import api from './common';

export const scrapApi = {
  getDetail: async () => {
    return await api.get('/petitions?id=600803', false);
  },
};
