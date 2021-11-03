import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const myInfo = atom({
  key: 'myInfo',
  default: {
    name: '',
    nickName: '',
    email: '',
    memberId: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
