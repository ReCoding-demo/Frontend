import { SetStateAction, useEffect, useState } from 'react';
import Button from './Button';

interface Modal {
  title?: string; // 모달 제목
  children?: React.ReactNode; // 모달 설명글
  setIsOpenModal: React.Dispatch<SetStateAction<boolean>>; // 모달 닫는 setState
}

const Modal = ({ title, children, setIsOpenModal }: Modal) => {
  const [visible, setVisible] = useState(true);

  // 모달 닫을 시 애니메이션 적용하기 위한 딜레이
  const handleCloseModal = () => {
    setVisible(false);
    setTimeout(() => {
      setIsOpenModal(false);
    }, 250);
  };

  // 모달 사용 시 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  // 신청 구글폼으로 이동
  const onClickApply = () => {
    window.open('https://tally.so/r/wzze4a/', '_blank', 'noopener,noreferrer');
    handleCloseModal();
  };

  return (
    <div
      className={`w-full h-full fixed flex items-center justify-center top-0 left-0 z-[100] ${visible ? 'animate-fade-in' : 'animate-fade-out'}`}
      style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      onClick={handleCloseModal}
    >
      <div
        className="flex flex-col gap-6 items-center bg-white px-10 py-9 shadow-lg rounded-lg border-solid border border-gray-40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Text */}
        <div className="flex flex-col gap-2 items-center">
          <p className="headline-sm text-gray-80">{title}</p>
          <p className="body-md text-gray-60 text-center">{children} </p>
        </div>

        {/* Button */}
        <div className="w-[385px] flex flex-col gap-4">
          <Button color="green" size="lg" fullWidth onClick={onClickApply}>
            구글폼으로 코드리뷰 신청하기
          </Button>
          <Button color="white" size="lg" fullWidth onClick={handleCloseModal}>
            취소
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
