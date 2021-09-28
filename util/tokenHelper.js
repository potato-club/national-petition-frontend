import { settings } from 'constants/index';

export const tokenHelper = {
  getIdToken: async () =>
    (await localStorage.getItem(settings.tokenkey.id)) ?? '',
  setIdToken: (token) => localStorage.setItem(settings.tokenkey.id, token),
  getRefreshToken: async () =>
    (await localStorage.getItem(settings.tokenkey.refresh)) ?? '',
  setRefreshToken: (token) =>
    localStorage.setItem(settings.tokenkey.refresh, token),
};
