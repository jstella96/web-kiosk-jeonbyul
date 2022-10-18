import React, { useEffect, useRef, useState } from 'react';

export const useTouchSlider = (
  selectedIndex: number,
  changeSelectedIndex: (index: number) => void,
  max: number
) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [interval, setInterval] = useState(0);

  useEffect(() => {
    if (!sliderRef.current) return;
    setInterval(sliderRef.current?.clientWidth);
    setTranslateX(sliderRef.current?.clientWidth * selectedIndex * -1);
  }, [selectedIndex]);

  function handleTouchStart(evt: any) {
    const touches = evt.changedTouches;
    setStartX(touches[0].clientX);
  }

  function handleTouchMove(evt: any) {
    const touches = evt.changedTouches;
    const diff = startX - touches[0].clientX;
    if (diff < 0 && selectedIndex === 0) return;
    if (diff > 0 && selectedIndex === max) return;
    setTranslateX(-interval * selectedIndex - diff);
  }

  function handleTouchEnd(evt: any) {
    const touches = evt.changedTouches;
    const diff = startX - touches[0].clientX;
    if (diff < 0 && selectedIndex === 0) return;
    if (diff > 0 && selectedIndex === max) return;
    if (diff > 20) {
      changeSelectedIndex(selectedIndex + 1);
    } else if (diff < -20) {
      changeSelectedIndex(selectedIndex - 1);
    }
  }

  return {
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    translateX,
    sliderRef
  };
};
