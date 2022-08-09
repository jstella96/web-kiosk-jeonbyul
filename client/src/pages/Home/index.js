import React from 'react';

import './index.scss';

const Home = ({ onButtonClick }) => {
  return (
    <div className="home">
      <h2>Le Cordon Bleu</h2>
      <div className="home-button">
        <button onClick={onButtonClick(false)}>매장이용</button>
        <button onClick={onButtonClick(true)}>포장</button>
      </div>
    </div>
  );
};
export default Home;
