import { io } from 'socket.io-client';

let socket;

export const socketManager = {
  init: async (url) => {
    socket = await io(url);
  },
  disconnect: () => {
    socket.disconnect();
  },

  get id() {
    return socket.id;
  },

  get socket() {
    return socket;
  },
};
