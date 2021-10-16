import api from './common';

export const memberApi = {
  addNickName: async (params) => {
    return await api.authPost('/api/v1/mypage/nickName', params);
  },
  getNickName: async (params) => {
    return await api.authGet('/nickName', params);
  },
  getInfo: async () => {
    return await api.authGet('/api/v1/mypage/info');
  },
  boardList: async (params) => {
    return await api.authGet('/api/v1/mypage/boardList', params);
  },
  delete: async () => {
    return await api.authDelete('/api/v1/mypage/delete');
  },
  logout: async (params) => {
    return await api.authPost('/api/v1/logout', params);
  },
};
