import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Axios } from '../api/axios';
import { useSetRecoilState } from 'recoil';
import { LoginState, TokenState } from '../states/LoginState';

const KakaoLoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const setLoginState = useSetRecoilState(LoginState);
  const setToeknState = useSetRecoilState(TokenState);
  const code = searchParams.get('code');

  const kakaoLoginHandler = async () => {
    await Axios.get('/api/auth', {
      params: {
        code,
      },
    })
      .then((res) => {
        // 1. 유저정보 추출
        const data = res.data.data;
        const { memberId, email, name, picture, accessToken, refreshToken } =
          data;

        // 2. 전역 상태관리
        setLoginState({
          memberId,
          email,
          name,
          picture,
        });
        setToeknState({
          accessToken,
          refreshToken,
        });

        // 3. Header Authorization default값으로 accessToken 설정
        Axios.defaults.headers.common['Authorization'] =
          `Bearer ${accessToken}`;

        // 4. 홈 화면으로 이동
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    kakaoLoginHandler();
  }, []);

  return null;
};

export default KakaoLoginPage;
