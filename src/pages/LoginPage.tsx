const LoginPage = () => {
  const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
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
