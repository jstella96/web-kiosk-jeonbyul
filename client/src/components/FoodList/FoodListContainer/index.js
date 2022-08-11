import React, { useContext, useEffect, useRef, useState } from 'react';
import OptionContext, { useOptions } from 'context/optionContext';
import OptionModal from 'components/Modal/OptionModal';
import FoodList from 'components/FoodList/FoodList';
import './index.scss';

const FoodListContainer = ({ foodByCategory, selectedIndex }) => {
  const options = useOptions();
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
            key={item.id}
            openOptionModal={openOptionModal}
            {...(index === 0 ? { ref: foodListRef } : {})}
            foods={item.foods}
          />
        ))}
      </div>
      <OptionModal
        sizeOptions={options.size[selectedFood.id] || {}}
        temperatureOptions={options.temperature[selectedFood.id] || {}}
        isOpen={isOptionModalOpen}
        close={closeOptionModal}
        food={selectedFood}
      />
    </div>
  );
};
export default FoodListContainer;
