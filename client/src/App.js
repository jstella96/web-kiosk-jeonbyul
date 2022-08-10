import React, { useEffect, useState } from 'react';
import './App.scss';

import Router from './Router/Router.js';
import { requestGetOption } from './api/api';
import OptionStore from 'store/OptionContext';
import { CartItemsProvider } from 'store/CartItemsContext';

function App() {
  const [optionByFood, setOptionByFood] = useState({});
  const fetchAndSetOptionData = async () => {
    const optionByFood = await requestGetOption();
    setOptionByFood(optionByFood);
  };
  useEffect(() => {
    fetchAndSetOptionData();
  }, []);

  return (
    <div className="App">
      <CartItemsProvider>
        <OptionStore>
          <Router></Router>
        </OptionStore>
      </CartItemsProvider>
    </div>
  );
}
export default App;
