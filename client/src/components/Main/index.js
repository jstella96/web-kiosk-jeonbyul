import React from 'react';

import './index.scss';

const Main = () => {
  return (
    <div className="main">
      <header className="main-header">
        <nav>
          <div>커피</div>
          <div>디저트</div>
        </nav>
      </header>
      <main className="main-list"></main>
      <div className="main-cart"></div>
      <div className="main-order-button"></div>
      <footer className="footer"></footer>
    </div>
  );
};
export default Main;
