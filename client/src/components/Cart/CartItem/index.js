import React from 'react';
import FoodCount from 'components/common/FoodCount';
import CartOptionTag from '../CartOptionTag';
import './index.scss';

const CartItem = ({ cartItem, index, setCount, deleteCartItem }) => {
  const { food, count, sizeOption, temperatureOption } = cartItem;
  return (
    <div className="cart-item-container" key={food.id}>
      <button className="cart-item-remove" onClick={() => deleteCartItem(index)}>
        x
      </button>
      <img
        src="https://www.ediya.com/files/menu/IMG_1649842079840.png"
        className="cart-item-image"
      ></img>
      <h2 className="cart-item-name">{food.name}</h2>
      <div className="cart-item-option-wrapper">
        <CartOptionTag option={sizeOption}></CartOptionTag>
        <CartOptionTag option={temperatureOption}></CartOptionTag>
      </div>
      <div className="cart-item-footer">
        <FoodCount count={count} setCount={setCount} index={index} />
      </div>
    </div>
  );
};
export default CartItem;
