interface Tag {
  color: string;
  children: React.ReactNode;
}

const Tag = ({ color, children }: Tag) => {
  const getColor = (color: string) => {
    switch (color) {
      case 'purple':
        return 'bg-purple-10 text-purple-60';
      case 'blue':
        return 'bg-cyan-10 text-cyan-80';
      case 'green':
        return 'bg-green-10 text-green-80';
    }
  };

  return (
    <div className={`${getColor(color)} label-md p-1 rounded w-fit`}>
      {children}
    </div>
  );
};

export default Tag;
