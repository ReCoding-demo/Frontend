interface Tag {
  color: string;
  children: React.ReactNode;
}

const Tag = ({ color, children }: Tag) => {
  const getColor = (color: string) => {
    switch (color) {
      case 'purple':
        return 'bg-purple10 text-purple60';
      case 'blue':
        return 'bg-cyan10 text-cyan80';
      case 'green':
        return 'bg-green10 text-green80';
    }
  };

  return (
    <div className={`${getColor(color)} label-md p-1 rounded w-fit`}>
      {children}
    </div>
  );
};

export default Tag;
