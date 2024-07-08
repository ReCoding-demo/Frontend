import { useState } from 'react';

import Tag from '../../ui/Tag';
import AICodeReviewForm from './AICodeReviewForm';
import AICodeReviewResult from './AICodeReviewResult';
import { useMutation } from '@tanstack/react-query';
import { Axios } from '../../../api/axios';
import {
  AICodeReviewResultValue,
  AICodeReviewValue,
} from '../../../interfaces/ai-code-review.interface';
import Modal, { useModal } from '../../ui/Modal';
import Button from '../../ui/Button';

interface AIModal {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AICodeReviewModal = ({ setIsOpenModal }: AIModal) => {
  const { visible, closeModalWithAnimation } = useModal({
    setIsOpenModal,
  });
  const [value, setValue] = useState<AICodeReviewValue>({
    code: '',
    style: '',
  });
  const [result, setResult] = useState<AICodeReviewResultValue>({
    comment: '',
    code: '',
  });

  const { mutate: reviewCodeWithAI, isPending } = useMutation({
    mutationFn: async (params: { value: AICodeReviewValue }) => {
      const res = await Axios.post('/api/windyflo/codeReview', params.value);
      return res.data;
    },
    onSuccess: (data) => {
      setResult({
        comment: data.data.style,
        code: data.data.code,
      });
    },
  });

  const handleReviewCodeWithAI = () => {
    reviewCodeWithAI({ value });
  };

  const handleCloseModal = () => {
    closeModalWithAnimation();
  };

  return (
    <Modal
      visible={visible}
      onHide={handleCloseModal}
      width={700}
      height={500}
      disableOutsideClick
    >
      {/* Content */}
      <div className="flex w-full flex-1 flex-col gap-4 overflow-y-auto">
        <div className="flex items-center justify-center gap-2">
          <h3 className="title-lg text-gray-80">AI에게 코드리뷰 받기</h3>
          <Tag as="span" color="green" textSize="xs">
            Beta
          </Tag>
        </div>
        <div className="flex w-full flex-1 gap-4 overflow-y-auto">
          <AICodeReviewForm value={value} setValue={setValue} />
          <div>
            <div className="h-full w-px bg-gray-40" />
          </div>
          <AICodeReviewResult result={result} isPending={isPending} />
        </div>
      </div>

      {/* Button */}
      <div className="flex w-full items-center gap-4">
        <Button
          color={value.code && value.style ? 'green' : 'gray'}
          size="lg"
          fullWidth
          onClick={handleReviewCodeWithAI}
        >
          확인
        </Button>
        <Button color="white" size="lg" fullWidth onClick={handleCloseModal}>
          취소
        </Button>
      </div>
    </Modal>
  );
};

export default AICodeReviewModal;
