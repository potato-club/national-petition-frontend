import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const myInformation = atom({
  key: 'myInformation',
  default: {
    name: '사용자이름',
    nickName: '닉네임',
    email: '이메일',
    memberId: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
