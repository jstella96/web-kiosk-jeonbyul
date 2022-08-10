import React from 'react';
import FoodCount from 'components/common/FoodCount';

import './index.scss';

const OptionTag = ({ option }) => {
  if (!option) return <></>;
  return (
    <span className="option-tag">
      <span>{option.label}</span>
      <span>+{option.additionalPrice}</span>
    </span>
  );
};
export default OptionTag;
