import React, { useState } from 'react';
import { ReactComponent as Exit } from 'assets/icon/exit.svg';
import { ReactComponent as Search } from 'assets/icon/search.svg';

import './index.scss';
import { usePage } from 'context/pageContext';

const Footer = () => {
  const { movePage } = usePage();
  return (
    <div className="footer">
      <button className="footer-button" onClick={() => movePage('home')}>
        <Exit />
        <span>나가기</span>
      </button>
      <button className="footer-button">
        <Search />
        <span>검색하기</span>
      </button>
    </div>
  );
};
export default Footer;
