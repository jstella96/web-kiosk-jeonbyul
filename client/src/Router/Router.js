import React, { useState } from 'react';
import Home from 'pages/Home';
import Main from 'pages/Main';
import Order from 'pages/Order';
import Payment from 'pages/Payment';
import Receipt from 'pages/Receipt';
import { usePage } from 'context/pageContext';
function Router({ categories, foodByCategory }) {
  const { page } = usePage();
  const [orderNum, setOrderNum] = useState();
  switch (page) {
    case 'home': {
      return <Home></Home>;
    }
    case 'main': {
      return <Main categories={categories} foodByCategory={foodByCategory}></Main>;
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
