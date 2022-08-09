import React, { useState } from 'react';
import FoodList from '../../components/FoodList/FoodList';

import './index.scss';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Cart from '../../components/ Cart';
import FoodListContainer from '../../components/FoodList/FoodListContainer';
const Main = ({ categories, foodByCategory, changePage, optionByFood }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="main">
      <NavBar
        categories={categories}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <FoodListContainer
        optionByFood={optionByFood}
        foodByCategory={foodByCategory}
        selectedIndex={selectedIndex}
      />
      <Cart changePage={changePage} />
      <Footer changePage={changePage} />
    </div>
  );
};
export default Main;
