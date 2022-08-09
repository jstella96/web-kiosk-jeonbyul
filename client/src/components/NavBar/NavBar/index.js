import './index.scss';

import React, { useRef, useState } from 'react';
import { ReactComponent as LeftArrow } from 'assets/icon/left.svg';
import { ReactComponent as RightArrow } from 'assets/icon/right.svg';
import NavBarItemList from 'components/NavBar/NavBarItemList';
import NavBarLine from 'components/NavBar/NavBarLine';

const MaxItem = 4;
const NavBar = ({ categories, selectedIndex, setSelectedIndex }) => {
  let nowStartIndex = useRef(0);

  //코드 리팩토링!
  const changeSelectedIndex = (nextIndex) => () => {
    const categoriesLen = categories.length;
    if (nextIndex < 0 || categoriesLen - 1 < nextIndex) return;
    if (nextIndex - nowStartIndex.current === MaxItem) {
      if (nextIndex === categoriesLen - 1 && categoriesLen % 2 === 1) {
        nowStartIndex.current = nowStartIndex.current + 1;
      } else {
        nowStartIndex.current = nowStartIndex.current + 2;
      }
    } else if (nextIndex < nowStartIndex.current) {
      if (nextIndex === 0 && categoriesLen % 2 === 1) {
        nowStartIndex.current = nowStartIndex.current - 1;
      } else {
        nowStartIndex.current = nowStartIndex.current - 2;
      }
    }
    setSelectedIndex(nextIndex);
  };

  return (
    <nav className="navbar">
      <div className="navbar-item-container">
        <div className="left-arrow arrow-button">
          <LeftArrow width="20" height="20" onClick={changeSelectedIndex(selectedIndex - 1)} />
        </div>
        <NavBarItemList
          categories={categories}
          selectedIndex={nowStartIndex.current}
          changeSelectedIndex={changeSelectedIndex}
        />
        <div className="right-arrow arrow-button">
          <RightArrow width="20" height="20" onClick={changeSelectedIndex(selectedIndex + 1)} />
        </div>
      </div>
      <NavBarLine selectedIndex={selectedIndex - nowStartIndex.current} />
    </nav>
  );
};
export default NavBar;
