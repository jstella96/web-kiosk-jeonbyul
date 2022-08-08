import React from 'react';
import FoodList from '../FoodList';

import './index.scss';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Cart from '../ Cart';
const Main = ({ categories }) => {
  return (
    <div className="main">
      <NavBar categories={categories}></NavBar>
      <FoodList></FoodList>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
};
export default Main;
