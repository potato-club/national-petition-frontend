export const getErrorMessage = (e) => {
  if (['U001', 'U002'].includes(e.response?.data?.code)) {
    location.href =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/user/login'
        : 'https://d2gqxpfawxnoj9.cloudfront.net/user/login';
  }

  return e.response?.data?.message;
};
