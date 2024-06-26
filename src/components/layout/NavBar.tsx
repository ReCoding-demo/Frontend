import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileImg from '../ui/ProfileImg';

const NavBar = () => {
  const navigate = useNavigate();
  const [isLogin] = useState(false);

  return (
    <div className="w-full border-b-[1px] border-b-gray-30 px-6">
      <div className="w-responsive max-w-contents h-[60px] m-auto flex justify-between items-center">
        <button
          className="flex items-center gap-3"
          onClick={() => navigate('/')}
        >
          <img src="/icons/logo.svg" />
          <img src="/icons/logo-typo.svg" />
        </button>
        {isLogin ? (
          <div className="flex items-center gap-3">
            <ProfileImg size="md" />
            <p className="label-md-pro text-gray-100">닉네임</p>
          </div>
        ) : (
          <button
            className="label-md-pro p-3 text-green-70"
            onClick={() => navigate('/login')}
          >
            회원가입 / 로그인
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
