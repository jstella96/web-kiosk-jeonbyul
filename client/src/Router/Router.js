import React, { useState } from 'react';
import Home from 'pages/Home';
import Main from 'pages/Main';
import Order from 'pages/Order';
import Payment from 'pages/Payment';
import Receipt from 'pages/Receipt';
import { usePage } from 'context/pageContext';
function Router() {
  const { page } = usePage();
  const [orderNum, setOrderNum] = useState(0);
  switch (page) {
    case 'home': {
      return <Home></Home>;
    }
    case 'main': {
      return <Main></Main>;
    }
    case 'order': {
      return <Order />;
    }
    case 'payment': {
      return <Payment setOrderNum={setOrderNum} />;
    }
    case 'receipt': {
      return <Receipt orderNum={orderNum} />;
    }
    default: {
      return <Home></Home>;
    }
  }
}

export default Router;
