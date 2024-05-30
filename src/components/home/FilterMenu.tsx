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

const FilterMenu = ({
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
        className="border-gray30 flex cursor-pointer items-center rounded-md border py-3 pl-4 pr-2.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray80 font-medium">{label}</span>
        {selectedList && selectedList.length >= 1 && labelList && (
          <span className="text-green70 ml-2 font-semibold">
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
          'border-gray40 absolute -bottom-[10px] w-[469px] translate-y-full rounded-md border bg-white shadow-md duration-200',
          {
            'pointer-events-auto opacity-100': isOpen,
            'pointer-events-none opacity-0': !isOpen,
          },
        )}
      >
        <div className="border-gray30 border-b p-5 text-sm">{children}</div>
        <div className="flex justify-end gap-5 px-5 py-4">
          <button
            className="text-gray60 text-sm font-semibold"
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
            className="text-green70 text-sm font-semibold"
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

FilterMenu.chipList = ChipList;

export default FilterMenu;
