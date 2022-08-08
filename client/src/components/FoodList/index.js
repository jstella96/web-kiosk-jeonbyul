import React, { useState } from 'react';

import './index.scss';

const FoodList = ({ onButtonClick }) => {
  const [foodList, setFoodList] = useState(Array.from({ length: 10 }, () => {}));
  return (
    <div className="foodlist">
      {foodList.map(() => (
        <div className="foodlist-item">
          <img src="https://www.ediya.com/files/menu/IMG_1649842079840.png"></img>
          <h2 className="foodlist-item-name">카페라떼</h2>
          <span className="foodlist-item-price">5000원</span>
        </div>
      ))}
    </div>
  );
};
export default FoodList;
