import { SetStateAction } from 'react';
import Button from '../../ui/Button';
import Modal, { useModal } from '../../ui/Modal';

interface ApplyCodeReviewModal {
  title?: string; // 모달 제목
  children?: React.ReactNode; // 모달 설명글
  setIsOpenModal: React.Dispatch<SetStateAction<boolean>>; // 모달 닫는 setState
}

const ApplyCodeReviewModal = ({
  title,
  children,
  setIsOpenModal,
}: ApplyCodeReviewModal) => {
  const { visible, closeModalWithAnimation } = useModal({ setIsOpenModal });

  const handleCloseModal = () => {
    closeModalWithAnimation();
  };

  const onClickApply = () => {
    window.open('https://tally.so/r/wzze4a/', '_blank', 'noopener,noreferrer');
    handleCloseModal();
  };

  return (
    <Modal visible={visible} onHide={handleCloseModal} width={450}>
      {/* Text */}
      <div className="flex flex-col items-center gap-2">
        <p className="headline-sm text-gray-80">{title}</p>
        <p className="body-md text-center text-gray-60">{children} </p>
      </div>

      {/* Button */}
      <div className="flex w-full flex-col gap-4">
        <Button color="green" size="lg" fullWidth onClick={onClickApply}>
          구글폼으로 코드리뷰 신청하기
        </Button>
        <Button color="white" size="lg" fullWidth onClick={handleCloseModal}>
          취소
        </Button>
      </div>
    </Modal>
  );
};

export default ApplyCodeReviewModal;
