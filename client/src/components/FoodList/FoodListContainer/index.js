import React, { useEffect, useRef, useState } from 'react';
import OptionModal from '../../OptionModal';
import FoodList from '../FoodList';
import './index.scss';

const FoodListContainer = ({ foodByCategory, selectedIndex }) => {
  const foodListRef = useRef(null);
  const interval = foodListRef.current?.clientWidth;
  const [isOptionModalOpen, setIsOptionMadalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState({});

  const openOptionModal = (food) => () => {
    setIsOptionMadalOpen(true);
    setSelectedFood(food);
  };
  const closeOptionModal = () => {
    setIsOptionMadalOpen(false);
  };
  return (
    <div className="foodlist-container">
      <div
        className="foodlist-wrapper"
        style={{ transform: `translateX(${-interval * selectedIndex}px)` }}
      >
        {foodByCategory.map((item, index) => (
          <FoodList
            openOptionModal={openOptionModal}
            {...(index === 0 ? { ref: foodListRef } : {})}
            foods={item.foods}
          />
        ))}
      </div>
      <OptionModal isOpen={isOptionModalOpen} close={closeOptionModal} food={selectedFood} />
    </div>
  );
};
export default FoodListContainer;
