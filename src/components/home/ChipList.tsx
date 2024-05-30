import Chip from './Chip';
import ChipListDesc from './ChipListDesc';

interface Props {
  labelList: string[];
  selectedList?: number[];
  onChipClick?: (index: number) => void;
}

const ChipList = ({ labelList, selectedList = [], onChipClick }: Props) => {
  return (
    <ul className="mt-5 flex flex-wrap items-center gap-2.5">
      {labelList.map((label, index) => (
        <Chip
          key={label}
          isSelected={selectedList.includes(index)}
          onClick={() => {
            if (onChipClick) {
              onChipClick(index);
            }
          }}
        >
          {label}
        </Chip>
      ))}
    </ul>
  );
};

ChipList.description = ChipListDesc;

export default ChipList;
