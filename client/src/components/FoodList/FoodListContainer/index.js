import React, { useContext, useEffect, useRef, useState } from 'react';
import OptionContext, { useOptions } from 'context/optionContext';
import OptionModal from 'components/Modal/OptionModal';
import FoodList from 'components/FoodList/FoodList';
import './index.scss';

const FoodListContainer = ({ foodByCategory, selectedIndex, setSelectedIndex }) => {
  const options = useOptions();
  const foodListRef = useRef(null);
  const foodListWrapperRef = useRef(null);
  const foodListContainerRef = useRef(null);
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

  useEffect(() => {
    foodListContainerRef.current.addEventListener('touchstart', handleStart, false);
    foodListContainerRef.current.addEventListener('touchend', handleEnd, false);
    foodListContainerRef.current.addEventListener('touchmove', handleMove, false);
  });

  function removeEvent() {
    foodListContainerRef.current.removeEventListener('touchstart', handleStart);
    foodListContainerRef.current.removeEventListener('touchend', handleEnd);
    foodListContainerRef.current.removeEventListener('touchmove', handleMove);
  }

  let startX = 0;
  function handleEnd(evt) {
    const touches = evt.changedTouches;
    const diff = startX - touches[0].clientX;
    if (diff < 0 && selectedIndex === 0) return;
    if (diff > 0 && selectedIndex === foodByCategory.length - 1) return;
    if (diff > 20) {
      removeEvent();
      setSelectedIndex(selectedIndex + 1)();
    } else if (diff < -20) {
      removeEvent();
      setSelectedIndex(selectedIndex - 1)();
    } else {
      foodListWrapperRef.current.style.transform = `translateX(${-interval * selectedIndex}px)`;
    }
  }

  function handleMove(evt) {
    const touches = evt.changedTouches;
    const diff = startX - touches[0].clientX;
    if (diff < 0 && selectedIndex === 0) return;
    if (diff > 0 && selectedIndex === foodByCategory.length - 1) return;
    foodListWrapperRef.current.style.transform = `translateX(${
      -interval * selectedIndex - diff
    }px)`;
  }

  function handleStart(evt) {
    const touches = evt.changedTouches;
    startX = touches[0].clientX;
  }

  return (
    <div ref={foodListContainerRef} className="foodlist-container">
      <div
        ref={foodListWrapperRef}
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
