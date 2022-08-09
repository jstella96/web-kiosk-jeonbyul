import React, { useEffect, useState } from 'react';
import './App.scss';

import Router from './Router/Router.js';
import { requestGetOption } from './api/api';
import OptionContext from './contexts/option';

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
      <OptionContext.Provider value={optionByFood}>
        <Router></Router>
      </OptionContext.Provider>
    </div>
  );
}

export default App;
