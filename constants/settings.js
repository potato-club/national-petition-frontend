export const settings = {
  apiUrl:
    process.env.NODE_ENV === 'development'
      ? 'https://dev.petition.pw'
      : 'https://petition.pw',
  testUrl: 'https://fogojgtvd5.execute-api.ap-northeast-2.amazonaws.com',
  tokenkey: {
    id: 'ID_TOKEN',
    refresh: 'REFRESH_TOKEN',
  },
};
