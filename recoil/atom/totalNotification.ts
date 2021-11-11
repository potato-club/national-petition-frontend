import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();
export const totalNotification = atom({
  key: 'totalNotification',
  default: {
    notice: true,
  },
  effects_UNSTABLE: [persistAtom],
});
