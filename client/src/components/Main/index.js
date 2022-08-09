import React, { useState } from 'react';
import FoodList from '../FoodList/FoodList';

import './index.scss';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Cart from '../ Cart';
import FoodListContainer from '../FoodList/FoodListContainer';
const Main = ({ categories, foodByCategory, changePage }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="main">
      <NavBar
        categories={categories}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <FoodListContainer foodByCategory={foodByCategory} selectedIndex={selectedIndex} />
      <Cart changePage={changePage} />
      <Footer changePage={changePage} />
    </div>
  );
};
export default Main;
