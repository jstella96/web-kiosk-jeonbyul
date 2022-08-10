import React, { useState } from 'react';
import FoodCount from 'components/common/FoodCount';

import './index.scss';

const CartItem = ({ cartItem, deleteCartItem, changeCount, index }) => {
  const { food, count, sizeOption, temperatureOption } = cartItem;
  return (
    <div className="cart-item-container" key={food.id}>
      <button className="cart-item-remove" onClick={deleteCartItem(index)}>
        x
      </button>
      <img
        src="https://www.ediya.com/files/menu/IMG_1649842079840.png"
        className="cart-item-image"
      ></img>
      <h2 className="cart-item-name">{food.name}</h2>
      <div className="cart-item-option-wrapper">
        {sizeOption ? (
          <span className="cart-item-option">
            <span>{sizeOption.label}</span>
            <span>+{sizeOption.additionalAmount}</span>
          </span>
        ) : (
          <></>
        )}
        {temperatureOption ? (
          <span className="cart-item-option">
            <span>{temperatureOption.label}</span>
            <span>+{temperatureOption.additionalAmount}</span>
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className="cart-item-footer">
        <FoodCount count={count} setCount={changeCount} idx={index} />
      </div>
    </div>
  );
};
export default CartItem;
