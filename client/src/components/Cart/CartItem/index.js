import React from 'react';
import FoodCount from 'components/common/FoodCount';
import OptionTag from 'components/common/OptionTag';
import './index.scss';

const CartItem = ({ cartItem, index, onChangeCount, onDelete }) => {
  const { food, count, sizeOption, temperatureOption } = cartItem;
  return (
    <div className="cart-item-container" key={food.id}>
      <button className="cart-item-remove" onClick={() => onDelete(index)}>
        x
      </button>
      <img src={food.imgUrl} className="cart-item-image"></img>
      <h2 className="cart-item-name">{food.name}</h2>
      <div className="cart-item-option-wrapper">
        <OptionTag option={sizeOption}></OptionTag>
        <OptionTag option={temperatureOption}></OptionTag>
      </div>
      <div className="cart-item-footer">
        <FoodCount count={count} setCount={onChangeCount} index={index} />
      </div>
    </div>
  );
};
export default CartItem;
