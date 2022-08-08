import React, { useEffect, useRef, useState } from 'react';
import FoodList from '../FoodList';
import './index.scss';

const FoodListContainer = ({ foodByCategory, selectedIndex }) => {
  const foodListRef = useRef(null);
  const interval = foodListRef.current?.clientWidth;
  return (
    <div className="foodlist-container">
      <div
        className="foodlist-wrapper"
        style={{ transform: `translateX(${-interval * selectedIndex}px)` }}
      >
        {foodByCategory.map((item, index) => (
          <FoodList {...(index === 0 ? { ref: foodListRef } : {})} foods={item.foods} />
        ))}
      </div>
    </div>
  );
};
export default FoodListContainer;
