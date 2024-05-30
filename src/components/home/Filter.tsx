import { useState } from 'react';

import FilterMenu from './FilterMenu';
import { AllSelectedList } from '../../pages/HomePage';

interface Props {
  label: string;
  description: string;
  labelList: string[];
  allSelectedList: AllSelectedList;
  setAllSelectedList: (allSelectedList: AllSelectedList) => void;
  keyName: keyof AllSelectedList;
  maxSelect?: number;
}

const Filter = ({
  label,
  description,
  labelList,
  allSelectedList,
  setAllSelectedList,
  keyName,
  maxSelect,
}: Props) => {
  const [selectedList, setSelectedList] = useState<number[]>([]);

  const handleChipClick = (index: number) => {
    let newSelectedList = [...selectedList];

    if (newSelectedList.includes(index)) {
      newSelectedList = newSelectedList.filter((item) => item !== index);
    } else if (maxSelect === 1) {
      newSelectedList = [index];
    } else if (!maxSelect || newSelectedList.length + 1 <= maxSelect) {
      newSelectedList = [...newSelectedList, index].sort((a, b) => a - b);
    }

    setSelectedList(newSelectedList);
  };

  const handleDropdownConfirm = () => {
    setAllSelectedList({ ...allSelectedList, [keyName]: selectedList });
  };

  const handleDropdownCancel = () => {
    setSelectedList(allSelectedList[keyName]);
  };

  return (
    <FilterMenu
      label={label}
      labelList={labelList}
      selectedList={allSelectedList[keyName]}
      onConfirm={handleDropdownConfirm}
      onCancel={handleDropdownCancel}
    >
      <FilterMenu.chipList.description>
        {description} {maxSelect && <> (최대 {maxSelect}개 선택 가능)</>}
      </FilterMenu.chipList.description>
      <FilterMenu.chipList
        labelList={labelList}
        selectedList={selectedList}
        onChipClick={handleChipClick}
      />
    </FilterMenu>
  );
};

export default Filter;
