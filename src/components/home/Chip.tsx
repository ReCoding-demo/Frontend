import clsx from 'clsx';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

const Chip = ({ children, isSelected, onClick }: Props) => {
  return (
    <li
      className={clsx(
        'group flex cursor-pointer items-center gap-1 rounded-full border py-1.5',
        {
          'border-green60 bg-white pl-3 pr-4': isSelected,
          'border-gray30 bg-gray20 px-4 hover:border-green60 hover:bg-white':
            !isSelected,
        },
      )}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {isSelected && (
        <i className="text-green70">
          <Icon icon="icon-park-outline:check" />
        </i>
      )}
      <span
        className={clsx('text-sm font-medium', {
          'text-green70': isSelected,
          'text-gray80 group-hover:text-green70': !isSelected,
        })}
      >
        {children}
      </span>
    </li>
  );
};

export default Chip;
