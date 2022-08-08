import React, { useEffect, useRef } from 'react';
import './index.scss';

const NavBarItemList = ({ categories, selectedIndex, changeSelectedIndex }) => {
  const navBarItemListEl = useRef(null);

  useEffect(() => {
    const interval = navBarItemListEl.current.querySelector('button')?.clientWidth;
    if (!interval) return;
    navBarItemListEl.current.style.transform = `translateX(${-interval * selectedIndex}px)`;
  });

  return (
    <div className="navbar-item-wrapper">
      <div className="navbar-item-list" ref={navBarItemListEl}>
        {categories.map((category, index) => (
          <button key={category.id} onClick={changeSelectedIndex(index)}>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
export default NavBarItemList;
