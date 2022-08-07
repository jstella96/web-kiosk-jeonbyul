import './index.scss';

import React from 'react';
import { ReactComponent as LeftArrow } from '../../assets/icon/left.svg';
import { ReactComponent as RightArrow } from '../../assets/icon/right.svg';

const NavBar = ({ onButtonClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-item-container">
        <div className="navbar-left-arrow">
          <LeftArrow width="20" height="20" />
        </div>
        <div className="navbar-item-wrapper">
          <button>커피</button>
          <button className="naver-item__active">에이드</button>
          <button>마카롱</button>
          <button>케이크</button>
        </div>
        <div className="navbar-right-arrow">
          <RightArrow width="20" height="20" />
        </div>
      </div>
      <div className="navbar-line">
        <div></div>
      </div>
    </nav>
  );
};
export default NavBar;
