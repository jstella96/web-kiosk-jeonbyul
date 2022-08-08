import React, { useEffect, useRef } from 'react';
import './index.scss';

const NavBarLine = ({ selectedIndex }) => {
  const selectedLineEl = useRef(null);

  useEffect(() => {
    const interval = selectedLineEl.current.clientWidth;
    selectedLineEl.current.style.transform = `translateX(${interval * selectedIndex}px)`;
  });

  return (
    <div className="navbar-line">
      <div ref={selectedLineEl} className="navbar-line__select"></div>
    </div>
  );
};
export default NavBarLine;
