import React, { useState } from 'react';
import Home from 'pages/Home';
import Main from 'pages/Main';
import Order from 'pages/Order';
import Payment from 'pages/Payment';
import Receipt from 'pages/Receipt';
import { usePage } from 'context/pageContext';
import { PAGE_URL } from 'constants/pageUrl';

function Router() {
  const { page } = usePage();
  const [orderNum, setOrderNum] = useState(0);
  switch (page) {
    case PAGE_URL.HOME: {
      return <Home></Home>;
    }
    case PAGE_URL.MAIN: {
      return <Main></Main>;
    }
    case PAGE_URL.ORDER: {
      return <Order />;
    }
    case PAGE_URL.PAYMENT: {
      return <Payment setOrderNum={setOrderNum} />;
    }
    case PAGE_URL.RECEIPT: {
      return <Receipt orderNum={orderNum} />;
    }
    default: {
      return <Home></Home>;
    }
  }
}

export default Router;
