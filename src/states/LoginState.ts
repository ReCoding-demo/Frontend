import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// 로컬스토리지에 저장
const { persistAtom } = recoilPersist();

export const LoginState = atom({
  key: 'login',
  default: {
    isLogin: false,
    memberId: '',
    email: '',
    name: '',
    picture: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const TokenState = atom({
  key: 'token',
  default: {
    accessToken: '',
    refreshToken: '',
  },
  effects_UNSTABLE: [persistAtom],
});
