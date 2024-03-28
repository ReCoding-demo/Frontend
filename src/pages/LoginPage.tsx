const LoginPage = () => {
  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const onKaKaoHandler = async () => {
    const redirectURI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code&prompt=login`;
    window.location.href = redirectURI;
  };

  return (
    <div className=" pt-32 flex flex-col gap-10 items-center m-auto">
      <img src="/icons/logo-typo.svg" className="w-[135px]" />
      <p className=" text-center text-gray100 headline-md">
        네카라쿠배 개발자에게
        <br />
        지금 바로 코드리뷰를 받아보세요
      </p>
      <button
        className="max-w-[360px] w-[95%] py-4 flex justify-center items-center gap-2 bg-[#FDDC3F] rounded-lg"
        onClick={onKaKaoHandler}
      >
        <img src="/icons/kakao.svg" />
        <p className="text-gray100 label-lg-pro">카카오로 3초만에 시작하기</p>
      </button>
    </div>
  );
};

export default LoginPage;
