import React, { forwardRef, useState } from 'react';
import './index.scss';

const FoodList = ({ foods, openOptionModal }, ref) => {
  return (
    <div className="foodlist" ref={ref}>
      {foods.map((food) => (
        <div key={food.id} className="foodlist-item" onClick={openOptionModal(food)}>
          <img src="https://www.ediya.com/files/menu/IMG_1649842079840.png"></img>
          <h2 className="foodlist-item-name">{food.name}</h2>
          <span className="foodlist-item-price">{food.basePrice}원</span>
        </div>
      ))}
    </div>
  );
};
export default forwardRef(FoodList);
