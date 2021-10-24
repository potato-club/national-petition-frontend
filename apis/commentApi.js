import api from './common';

export const commentApi = {
  edit: async (params) => {
    return await api.authTextPut('/api/v1/comment', params);
  },
  list: async (boardId, params) => {
    return await api.get(`/api/v1/comment/page/${boardId}`, params);
  },
  add: async (boardId, params) => {
    return await api.authPost(`/api/v1/comment/${boardId}`, params);
  },
  like: async (params) => {
    return await api.authPost('/api/v1/comment/like', params);
  },
  pageList: async (params) => {
    return await api.get('/api/v1/comment/page', params);
  },
  delete: async (commentId) => {
    return await api.authDelete(`/api/v1/comment/${commentId}`);
  },
  unlike: async (params) => {
    return await api.authDelete('/api/v1/comment/unlike', params);
  },
};
