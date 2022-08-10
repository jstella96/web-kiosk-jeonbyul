import React, { useState } from 'react';
import NavBar from 'components/NavBar/NavBar';
import FoodListContainer from 'components/List/FoodListContainer';
import CartContainer from 'components/Cart/CartContainer';
import Footer from 'components/Footer';
import './index.scss';

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
      <CartContainer changePage={changePage} />
      <Footer changePage={changePage} />
    </div>
  );
};
export default Main;
