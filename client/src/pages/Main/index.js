import React, { useState } from 'react';
import FoodList from 'components/List/FoodList';

import './index.scss';
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer';
import Cart from 'components/ Cart';
import FoodListContainer from 'components/List/FoodListContainer';
const Main = ({ categories, foodByCategory, changePage }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  const putCartItem = (newCartItem) => {
    let nextCartItem = [...cartItem];

    for (let item of nextCartItem) {
      if (
        item.food.id === newCartItem.food.id &&
        item.sizeOption?.key === newCartItem.sizeOption?.key &&
        item.temperatureOption?.key === newCartItem.temperatureOption?.key
      ) {
        item.count += newCartItem.count;
        setCartItem([...nextCartItem]);
        return;
      }
    }

    nextCartItem.push(newCartItem);
    setCartItem([...nextCartItem]);
  };

  const deleteCartItem = (itemIndex) => () => {
    const nextCartItem = cartItem.filter((item, index) => {
      return index !== itemIndex;
    });
    setCartItem([...nextCartItem]);
  };
  const updateCartItem = (nextCartItem) => {
    setCartItem(nextCartItem);
  };
  return (
    <div className="main">
      <NavBar
        categories={categories}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <FoodListContainer
        putCartItem={putCartItem}
        foodByCategory={foodByCategory}
        selectedIndex={selectedIndex}
      />
      <Cart
        updateCartItem={updateCartItem}
        cartItem={cartItem}
        deleteCartItem={deleteCartItem}
        changePage={changePage}
      />
      <Footer changePage={changePage} />
    </div>
  );
};
export default Main;
