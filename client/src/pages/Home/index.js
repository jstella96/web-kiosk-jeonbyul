import Loding from 'components/common/Loding';
import React from 'react';

import './index.scss';

const Home = ({ changePage }) => {
  return (
    <div className="home">
      <h2>Le Cordon Bleu</h2>
      <div className="home-button">
        <button onClick={changePage('main')}>매장이용</button>
        <button onClick={changePage('main')}>포장</button>
      </div>
    </div>
  );
};
export default Home;
