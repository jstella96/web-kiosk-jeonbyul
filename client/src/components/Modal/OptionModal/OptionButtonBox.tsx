import React, { useState } from 'react';
import { FlexRowCenter } from 'styles/common';
import { FoodOptionType } from 'types/food';
import OptionButton from './OptionButton';

interface OptionSelectProps {
  options: FoodOptionType[];
  onSelect: (option: FoodOptionType) => void;
  currSelectedIndex?: number;
}

const OptionButtonBox = ({ options = [], onSelect, currSelectedIndex }: OptionSelectProps) => {
  const [selectedIndex, setSeletedIndex] = useState(currSelectedIndex || 0);
  const handleClickOptionButton = (option: FoodOptionType, index: number) => {
    setSeletedIndex(index);
    onSelect(option);
  };
  return (
    <FlexRowCenter data-test="option-button-box">
      {options.map(
        (option, index) =>
          option.additionalPrice && (
            <OptionButton
              key={option.key}
              style={{ margin: '0.5rem 0.2rem' }}
              label={option.label}
              additionalPrice={option.additionalPrice}
              isSelected={selectedIndex === index}
              onClick={() => handleClickOptionButton(option, index)}
            ></OptionButton>
          )
      )}
    </FlexRowCenter>
  );
};

export default OptionButtonBox;
