import clsx from 'clsx';
import { Icon } from '@iconify/react/dist/iconify.js';

interface ChipProps {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

const Chip = ({ children, isSelected, onClick }: ChipProps) => {
  return (
    <li
      className={clsx(
        'group flex cursor-pointer items-center gap-1 rounded-full border py-1.5',
        {
          'border-green-60 bg-white pl-3 pr-4': isSelected,
          'border-gray-30 bg-gray-20 px-4 hover:border-green-60 hover:bg-white':
            !isSelected,
        },
      )}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {isSelected && (
        <i className="text-green-70">
          <Icon icon="icon-park-outline:check" />
        </i>
      )}
      <span
        className={clsx('text-sm font-medium', {
          'text-green-70': isSelected,
          'text-gray-80 group-hover:text-green-70': !isSelected,
        })}
      >
        {children}
      </span>
    </li>
  );
};

export default Chip;
