import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { ORDER_INFO_ACTIONS } from 'hooks/orderInfoState';
import React, { useEffect } from 'react';

import './index.scss';

const Home = () => {
  const { movePage } = usePage();
  const { orderInfoDispatch } = useOrderInfo();
  useEffect(() => {
    orderInfoDispatch({ type: ORDER_INFO_ACTIONS.CLEAN_ORDERINFO });
  }, []);
  return (
    <div className="home">
      <h2>Le Cordon Bleu</h2>
      <div className="home-button">
        <button onClick={() => movePage('main')}>매장이용</button>
        <button onClick={() => movePage('main')}>포장</button>
      </div>
    </div>
  );
};
export default Home;
