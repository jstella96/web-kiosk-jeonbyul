import React, { useState } from 'react';
import Home from './components/Home';
import Main from './components/Main';

function Router() {
  const [isTakeOut, setIsTakeOut] = useState();
  const [page, setPage] = useState('home');

  const onButtonClick = (isTakeOut) => () => {
    setIsTakeOut(isTakeOut);
    setPage('main');
  };

  if (page === 'home') {
    return <Home onButtonClick={onButtonClick}></Home>;
  }
  if (page === 'main') {
    return <Main></Main>;
  }
}

export default Router;
