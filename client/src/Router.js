import React, { useEffect, useState } from 'react';
import { requestGetCategories, requestGetFoods } from './api/api';
import Home from './components/Home';
import Main from './components/Main';
import Order from './components/Order';
import Payment from './components/Payment';
import Receipt from './components/Receipt';

function Router() {
  const [isTakeOut, setIsTakeOut] = useState();
  const [page, setPage] = useState('home');
  const [categories, setCategories] = useState([]);
  const [foodByCategory, setFoodByCategory] = useState([]);

  const fetchAndSetCategories = async () => {
    const categoriesData = await requestGetCategories();
    setCategories(categoriesData);
  };
  const fetchAndSetFoods = async () => {
    const foodByCategory = await requestGetFoods();
    setFoodByCategory(foodByCategory);
  };

  useEffect(() => {
    fetchAndSetCategories();
    fetchAndSetFoods();
  }, []);

  const onButtonClick = (isTakeOut) => () => {
    setIsTakeOut(isTakeOut);
    setPage('main');
  };

  const changePage = (page) => () => {
    setPage(page);
  };

  if (page === 'home') {
    return <Home onButtonClick={onButtonClick}></Home>;
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
    return <Payment changePage={changePage} />;
  }
  if (page === 'receipt') {
    return <Receipt changePage={changePage} />;
  }
}

export default Router;
