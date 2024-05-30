interface Props {
  children: React.ReactNode;
}

const ChipListDesc = ({ children }: Props) => {
  return <p className="text-sm">{children}</p>;
};

export default ChipListDesc;
