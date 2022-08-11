import React, { useRef, useState } from 'react';
import NavBar from 'components/NavBar/NavBar';
import FoodListContainer from 'components/FoodList/FoodListContainer';
import CartContainer from 'components/Cart/CartContainer';
import Footer from 'components/Footer';
import './index.scss';
const MaxItem = 4;
const Main = ({ categories, foodByCategory, changePage }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [nowStartIndex, setNowStartIndex] = useState(0);

  //코드 리팩토링!
  const changeSelectedIndex = (nextIndex) => () => {
    const categoriesLen = categories.length;
    let nextStartIndex = nowStartIndex;
    if (nextIndex < 0 || categoriesLen - 1 < nextIndex) return;
    if (nextIndex - nowStartIndex === MaxItem) {
      if (nextIndex === categoriesLen - 1 && categoriesLen % 2 === 1) {
        nextStartIndex = nowStartIndex + 1;
      } else {
        nextStartIndex = nowStartIndex + 2;
      }
    } else if (nextIndex < nowStartIndex) {
      if (nextIndex === 0 && categoriesLen % 2 === 1) {
        nextStartIndex = nowStartIndex - 1;
      } else {
        nextStartIndex = nowStartIndex - 2;
      }
    }
    setNowStartIndex(nextStartIndex);
    setSelectedIndex(nextIndex);
  };
  return (
    <div className="main">
      <NavBar
        nowStartIndex={nowStartIndex}
        categories={categories}
        selectedIndex={selectedIndex}
        changeSelectedIndex={changeSelectedIndex}
      />
      <FoodListContainer
        setSelectedIndex={changeSelectedIndex}
        foodByCategory={foodByCategory}
        selectedIndex={selectedIndex}
      />
      <CartContainer changePage={changePage} />
      <Footer changePage={changePage} />
    </div>
  );
};
export default Main;
