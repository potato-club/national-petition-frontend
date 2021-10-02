import api from './common';

export const rankApi = {
  getTop5: async () => {
    return await api.get('/api/v1/petition/rank');
  },
};
