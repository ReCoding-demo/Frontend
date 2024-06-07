import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
}

const DeveloperProfileTooltip = ({ children }: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [isShowTooltip, setIsShowTooltip] = useState(true);

  const handleCloseTooltip = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsShowTooltip(false);
    }, 250);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        handleCloseTooltip();
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isVisible]);

  return (
    <div className="relative">
      {children}
      {isShowTooltip && (
        <div
          ref={tooltipRef}
          className={clsx(
            'absolute -left-2 top-1/2 flex -translate-x-full -translate-y-1/2 items-center',
            {
              'animate-fade-in': isVisible,
              'animate-fade-out': !isVisible,
            },
          )}
        >
          <div className="body-sm w-[16.5rem] rounded-md bg-white p-3 text-center text-gray-80 shadow-md">
            현직 개발자이신가요?
            <br />
            개발자 프로필 등록하고 코드리뷰를 시작해보세요!
          </div>
          <div
            className="h-[1rem] w-[0.5rem] bg-white"
            style={{ clipPath: 'polygon(100% 50%, 0 0, 0 100%)' }}
          />
        </div>
      )}
    </div>
  );
};

export default DeveloperProfileTooltip;
