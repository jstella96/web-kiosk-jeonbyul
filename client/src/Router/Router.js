import React, { useEffect, useState, createContext } from 'react';
import { requestGetCategories, requestGetFoods, requestGetOption } from '../api/api';
import Home from '../pages/Home';
import Main from '../pages/Main';
import Order from '../pages/Order';
import Payment from '../pages/Payment';
import Receipt from '../pages/Receipt';

function Router() {
  const [isTakeOut, setIsTakeOut] = useState();
  const [page, setPage] = useState('home');
  const [categories, setCategories] = useState([]);
  const [foodByCategory, setFoodByCategory] = useState([]);
  const [optionByFood, setOptionByFood] = useState({});

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
      <Main
        optionByFood={optionByFood}
        changePage={changePage}
        categories={categories}
        foodByCategory={foodByCategory}
      ></Main>
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
