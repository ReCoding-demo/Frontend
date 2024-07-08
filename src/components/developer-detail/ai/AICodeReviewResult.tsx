import { AICodeReviewResultValue } from '../../../interfaces/ai-code-review.interface';

interface AICodeReviewResult {
  result: AICodeReviewResultValue;
  isPending: boolean;
}

const AICodeReviewResult = ({ result, isPending }: AICodeReviewResult) => {
  return (
    <div className="flex w-full flex-col gap-2 overflow-y-auto">
      <div className="flex h-20 flex-col">
        <label htmlFor="code-style" className="label-md text-gray-80">
          코드 설명
        </label>
        <div
          id="code-style"
          className="w-full flex-1 overflow-y-auto whitespace-pre-wrap rounded-md border border-gray-40 px-3 py-2 font-sans text-sm outline-none"
        >
          {isPending
            ? 'AI 코드 리뷰 중입니다.'
            : result.comment || '코드 설명은 여기에 표시됩니다.'}
        </div>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <label htmlFor="code" className="label-md text-gray-80">
          코드 결과
        </label>
        <div
          id="code"
          className="max-h-full w-full flex-1 overflow-y-auto whitespace-pre-wrap rounded-md border border-gray-40 px-3 py-2 font-mono text-xs outline-none"
        >
          {isPending
            ? '// AI 코드 리뷰 중입니다.'
            : result.code || '// 코드 결과는 여기에 표시됩니다.'}
        </div>
      </div>
    </div>
  );
};

export default AICodeReviewResult;
