import { useEffect } from 'react';

export const ScreenHandler = () => {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  window.addEventListener('resize', () => setScreenSize());
  useEffect(() => {
    setScreenSize();
  }, []);
  return null;
};
