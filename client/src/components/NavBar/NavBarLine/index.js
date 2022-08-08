import React, { useEffect, useRef } from 'react';
import './index.scss';

const NavBarLine = ({ selectedIndex }) => {
  const selectedLineEl = useRef(null);
  const interval = selectedLineEl.current?.clientWidth;

  return (
    <div className="navbar-line">
      <div
        ref={selectedLineEl}
        style={{ transform: `translateX(${interval * selectedIndex}px)` }}
        className="navbar-line__select"
      ></div>
    </div>
  );
};
export default NavBarLine;
