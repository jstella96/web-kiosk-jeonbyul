import React, { useEffect, useRef } from 'react';
import './index.scss';

const NavBarItemList = ({ categories, selectedIndex, changeSelectedIndex }) => {
  const buttonRef = useRef(null);
  const interval = buttonRef.current?.clientWidth;

  return (
    <div className="navbar-item-wrapper">
      <div
        className="navbar-item-list"
        style={{ transform: `translateX(${-interval * selectedIndex}px)` }}
      >
        {categories.map((category, index) => (
          <button
            {...(index === 0 ? { ref: buttonRef } : {})}
            key={category.id}
            onClick={changeSelectedIndex(index)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
export default NavBarItemList;
