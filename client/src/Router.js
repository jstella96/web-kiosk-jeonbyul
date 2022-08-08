import React, { useEffect, useState } from 'react';
import { requestGetCategories, requestGetFoods } from './api/api';
import Home from './components/Home';
import Main from './components/Main';

function Router() {
  const [isTakeOut, setIsTakeOut] = useState();
  const [page, setPage] = useState('main');
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

  if (page === 'home') {
    return <Home onButtonClick={onButtonClick}></Home>;
  }
  if (page === 'main') {
    return <Main categories={categories} foodByCategory={foodByCategory}></Main>;
  }
}

export default Router;
