import clsx from 'clsx';

interface Tag {
  color: 'purple' | 'blue' | 'green';
  textSize?: 'xs' | 'sm' | 'base';
  as?: 'li' | 'div';
  children: React.ReactNode;
}

const Tag = ({ color, textSize = 'base', as = 'div', children }: Tag) => {
  const tagColorStyle = {
    purple: 'bg-purple-10 text-purple-60',
    blue: 'bg-cyan-10 text-cyan-80',
    green: 'bg-green-10 text-green-80',
  };

  const textSizeStyle = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
  };

  if (as === 'li') {
    return (
      <li
        className={clsx(
          'label-md p-1 rounded w-fit',
          tagColorStyle[color],
          textSizeStyle[textSize],
        )}
      >
        {children}
      </li>
    );
  }

  return (
    <div
      className={clsx(
        'label-md p-1 rounded w-fit',
        tagColorStyle[color],
        textSizeStyle[textSize],
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
