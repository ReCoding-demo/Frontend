import { SetStateAction, useEffect, useState } from 'react';

interface Modal {
  visible: boolean;
  onHide: () => void;
  width: number;
  height?: number;
  children: React.ReactNode;
  disableOutsideClick?: boolean;
}

export const useModal = ({
  setIsOpenModal,
}: {
  setIsOpenModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [visible, setVisible] = useState(true);

  const closeModalWithAnimation = () => {
    setVisible(false);
    setTimeout(() => {
      setIsOpenModal(false);
    }, 250);
  };

  return { visible, closeModalWithAnimation };
};

const Modal = ({
  visible,
  onHide,
  width,
  height,
  disableOutsideClick,
  children,
}: Modal) => {
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

  return (
    <div
      className={`fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center ${visible ? 'animate-fade-in' : 'animate-fade-out'}`}
      style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      onClick={!disableOutsideClick ? onHide : undefined}
    >
      <div
        className="flex w-[700px] flex-col items-center gap-6 rounded-lg border border-solid border-gray-40 bg-white px-10 py-9 shadow-lg"
        style={{ width: `${width}px`, height: height ? `${height}px` : 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
