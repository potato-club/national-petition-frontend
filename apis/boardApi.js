import api from './common';

export const boardApi = {
  add: async (params) => {
    return await api.authPost('/api/v1/board', params);
  },
  update: async (params) => {
    return await api.authPost('/api/v1/board/update', params);
  },
  like: async (params) => {
    return await api.authPost('/api/v1/board/like', params);
  },
  likeCancel: async (params) => {
    return await api.authDelete('/api/v1/board/like', params);
  },
  getDetail: async (boardId) => {
    return await api.get(`/api/v1/getBoard/${boardId}`);
  },
  list: async (params) => {
    return await api.get('/api/v1/getBoard/list', params);
  },
  getLikeStatus: async (boardId) => {
    return await api.authGet(`/api/v1/board/status/${boardId}`);
  },
};
