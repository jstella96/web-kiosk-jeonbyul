import React, { useEffect, useRef, useState } from 'react';
import OptionContext from '../../../contexts/option';
import { useFoodListContainerState } from '../../../hooks/useFoodListContainerState';
import OptionModal from '../../OptionModal';
import FoodList from '../FoodList';
import './index.scss';

const FoodListContainer = ({ foodByCategory, selectedIndex, putCartItem }) => {
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

  const putInCart = (food) => {
    putCartItem(food);
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
      <OptionContext.Consumer>
        {(options) => (
          <OptionModal
            sizeOptions={options.size[selectedFood.id] || {}}
            temperatureOptions={options.temperature[selectedFood.id] || {}}
            isOpen={isOptionModalOpen}
            close={closeOptionModal}
            food={selectedFood}
            putInCart={putInCart}
          />
        )}
      </OptionContext.Consumer>
    </div>
  );
};
export default FoodListContainer;
