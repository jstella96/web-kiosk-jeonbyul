import React, { useEffect, useState } from 'react';
import { requestGetCategories, requestGetCategory } from './api/api';
import Home from './components/Home';
import Main from './components/Main';

function Router() {
  const [isTakeOut, setIsTakeOut] = useState();
  const [page, setPage] = useState('home');
  const [categories, setCategories] = useState([]);

  const fetchAndSetCategories = async () => {
    const categoriesData = await requestGetCategories();
    setCategories(categoriesData);
  };

  useEffect(() => {
    fetchAndSetCategories();
  }, []);

  const onButtonClick = (isTakeOut) => () => {
    setIsTakeOut(isTakeOut);
    setPage('main');
  };

  if (page === 'home') {
    return <Home onButtonClick={onButtonClick}></Home>;
  }
  if (page === 'main') {
    return <Main categories={categories}></Main>;
  }
}

export default Router;
