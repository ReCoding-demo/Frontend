import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import ChipList from './ChipList';

interface Props {
  label: string;
  labelList?: string[];
  selectedList?: number[];
  onConfirm?: () => void;
  onCancel?: () => void;
  children: React.ReactNode;
}

const Dropdown = ({
  label,
  children,
  labelList,
  selectedList,
  onConfirm,
  onCancel,
}: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setTimeout(() => {
          onCancel && onCancel();
        }, 200);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onCancel]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex cursor-pointer items-center rounded-md border border-gray30 py-3 pl-4 pr-2.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray80">{label}</span>
        {selectedList && selectedList.length >= 1 && labelList && (
          <span className="ml-2 font-semibold text-green70">
            {labelList[selectedList[0]]}{' '}
            {selectedList.length >= 2 && <>외 {selectedList.length - 1}개</>}
          </span>
        )}
        {isOpen ? (
          <i className="ml-3">
            <Icon icon="icon-park-outline:up" />
          </i>
        ) : (
          <i className="ml-3">
            <Icon icon="icon-park-outline:down" />
          </i>
        )}
      </div>
      <div
        className={clsx(
          'absolute -bottom-[10px] w-[469px] translate-y-full rounded-md border border-gray40 bg-white shadow-md duration-200',
          {
            'pointer-events-auto opacity-100': isOpen,
            'pointer-events-none opacity-0': !isOpen,
          },
        )}
      >
        <div className="border-b border-gray30 p-5 text-sm">{children}</div>
        <div className="flex justify-end gap-5 px-5 py-4">
          <button
            className="text-sm font-semibold text-gray60"
            onClick={() => {
              setIsOpen(false);
              setTimeout(() => {
                onCancel && onCancel();
              }, 200);
            }}
          >
            취소
          </button>
          <button
            className="text-sm font-semibold text-green70"
            onClick={() => {
              setIsOpen(false);
              onConfirm && onConfirm();
            }}
          >
            선택 완료
          </button>
        </div>
      </div>
    </div>
  );
};

Dropdown.chipList = ChipList;

export default Dropdown;
