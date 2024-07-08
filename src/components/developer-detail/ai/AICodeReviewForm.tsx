import { AICodeReviewValue } from '../../../interfaces/ai-code-review.interface';

interface AICodeReviewForm {
  value: AICodeReviewValue;
  setValue: React.Dispatch<React.SetStateAction<AICodeReviewValue>>;
}

const AICodeReviewForm = ({ value, setValue }: AICodeReviewForm) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex h-full flex-col">
        <label htmlFor="code" className="label-md text-gray-80">
          코드
        </label>
        <textarea
          name="code"
          id="code"
          className="w-full flex-1 resize-none rounded-md border border-gray-40 px-3 py-2 font-mono text-sm outline-none"
          placeholder='console.log("Hello, World!")'
          value={value.code}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label htmlFor="code-style" className="label-md text-gray-80">
          코드 스타일
        </label>
        <textarea
          name="style"
          id="code-style"
          className="w-full resize-none rounded-md border border-gray-40 px-3 py-2 text-sm outline-none"
          rows={2}
          placeholder="ex) 재사용성이 좋은 코드"
          value={value.style}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default AICodeReviewForm;
