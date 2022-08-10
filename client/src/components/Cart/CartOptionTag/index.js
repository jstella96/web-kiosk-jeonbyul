import React from 'react';
import FoodCount from 'components/common/FoodCount';

import './index.scss';

const CartOptionTag = ({ option }) => {
  if (!option) return <></>;
  return (
    <span className="cart-item-option">
      <span>{option.label}</span>
      <span>+{option.additionalAmount}</span>
    </span>
  );
};
export default CartOptionTag;
