import React, { useEffect, useState, createContext } from 'react';
import { requestGetCategories, requestGetFoods, requestGetOption } from 'api/api';
import Home from 'pages/Home';
import Main from 'pages/Main';
import Order from 'pages/Order';
import Payment from 'pages/Payment';
import Receipt from 'pages/Receipt';
import { useCartItemsDispatch } from 'hooks/useCartItemsDispatch';


function Router({ categories, foodByCategory }) {
  const [orderNum, setOrderNum] = useState();
  const [page, setPage] = useState('home');

  const { cartItemsDispatch } = useCartItemsDispatch();

  const changePage = (page) => () => {
    setPage(page);
  };

  if (page === 'home') {
    cartItemsDispatch({ type: 'clean' });
    return <Home changePage={changePage}></Home>;
  }
  if (page === 'main') {
    return (
      <Main changePage={changePage} categories={categories} foodByCategory={foodByCategory}></Main>
    );
  }
  if (page === 'order') {
    return <Order changePage={changePage} />;
  }
  if (page === 'payment') {
    return <Payment changePage={changePage} setOrderNum={setOrderNum} />;
  }
  if (page === 'receipt') {
    return <Receipt changePage={changePage} orderNum={orderNum} />;
  }
}

export default Router;
