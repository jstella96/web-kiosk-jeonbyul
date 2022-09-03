import React, { useRef, useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import FoodListContainer from 'components/FoodList/FoodListContainer';
import CartContainer from 'components/Cart/CartContainer';
import Footer from 'components/Footer';
import './index.scss';
import { CategoryType } from 'types/category';
import { FoodsByCategoryType } from 'types/food';
const MaxItem = 4;

interface MainProps {
  categories: CategoryType[];
  foodsByCategory: FoodsByCategoryType[];
}

const Main = ({ categories, foodsByCategory }: MainProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [nowStartIndex, setNowStartIndex] = useState(0);

  //코드 리팩토링!
  const changeSelectedIndex = (nextIndex: number) => {
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
      <Navbar
        nowStartIndex={nowStartIndex}
        categories={categories}
        selectedIndex={selectedIndex}
        changeSelectedIndex={changeSelectedIndex}
      />
      <FoodListContainer
        changeSelectedIndex={changeSelectedIndex}
        foodsByCategory={foodsByCategory}
        selectedIndex={selectedIndex}
      />
      <CartContainer />
      <Footer />
    </div>
  );
};
export default Main;
