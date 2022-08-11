import './index.scss';

import React, { useRef, useState } from 'react';
import { ReactComponent as LeftArrow } from 'assets/icon/left.svg';
import { ReactComponent as RightArrow } from 'assets/icon/right.svg';
import NavBarItemList from 'components/NavBar/NavBarItemList';
import NavBarLine from 'components/NavBar/NavBarLine';

const NavBar = ({ categories, selectedIndex, changeSelectedIndex, nowStartIndex }) => {
  return (
    <nav className="navbar">
      <div className="navbar-item-container">
        <div className="left-arrow arrow-button" onClick={changeSelectedIndex(selectedIndex - 1)}>
          <LeftArrow width="20" height="20" />
        </div>
        <NavBarItemList
          categories={categories}
          selectedIndex={nowStartIndex}
          changeSelectedIndex={changeSelectedIndex}
        />
        <div className="right-arrow arrow-button" onClick={changeSelectedIndex(selectedIndex + 1)}>
          <RightArrow width="20" height="20" />
        </div>
      </div>
      <NavBarLine selectedIndex={selectedIndex - nowStartIndex} />
    </nav>
  );
};
export default NavBar;
