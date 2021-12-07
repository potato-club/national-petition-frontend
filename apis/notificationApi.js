import api from './common';

export const notificationApi = {
  readStatus: async (notificationId) => {
    return await api.authPost(
      `/api/v1/notification/state/${notificationId}`,
      notificationId,
    );
  },
  changeState: async (params) => {
    return await api.authPost('/api/v1/notification/state', params);
  },
  getList: async () => {
    return await api.authGet('/api/v1/notification/list');
  },
};
