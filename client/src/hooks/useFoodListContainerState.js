import React, { useEffect, useRef, useState } from 'react';
export const useFoodListContainerState = () => {
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

  return {
    foodListRef,
    interval,
    isOptionModalOpen,
    setIsOptionMadalOpen,
    selectedFood,
    setSelectedFood,
    openOptionModal,
    closeOptionModal
  };
};
