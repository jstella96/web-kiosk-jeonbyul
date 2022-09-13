import { useEffect, useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import FoodListContainer from 'components/FoodList/FoodList';
import CartContainer from 'components/Cart/Cart';
import Footer from 'components/Footer/Footer';
import styled from 'styled-components';
import COLORS from 'constants/color';
import { calculateNextStartIndex } from 'utils/animation';
import { ServerErrorAlert } from 'components/common/ServerErrorAlert';
import { requestGetCategories, requestGetFoods } from 'api/api';
import { CategoryType } from 'types/category';
import { FoodsByCategoryType } from 'types/food';
import { FoodListSkeleton } from 'components/FoodList/FoodListSkeleton';

const MAIN_WIDTH = 767;

const Main = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [nowStartIndex, setNowStartIndex] = useState(0);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [foodsByCategory, setFoodsByCategory] = useState<FoodsByCategoryType[]>([]);
  const [hasError, setHasError] = useState(false);
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    const fetchAndSetInitData = async () => {
      setIsLoding(true);
      try {
        const foodsByCategory = await requestGetFoods();
        const categoriesData = await requestGetCategories();
        setCategories(categoriesData);
        setFoodsByCategory(foodsByCategory);
        setIsLoding(false);
      } catch (err) {
        console.error(err);
        setHasError(true);
      }
    };
    fetchAndSetInitData();
  }, []);

  const changeSelectedIndex = (nextIndex: number) => {
    const numVisibleItem = window.innerWidth <= MAIN_WIDTH ? 3 : 4;
    if (nextIndex < 0 || categories.length - 1 < nextIndex) return;
    const nextStartIndex = calculateNextStartIndex(
      nextIndex,
      nowStartIndex,
      categories.length,
      numVisibleItem
    );
    setNowStartIndex(nextStartIndex);
    setSelectedIndex(nextIndex);
  };
  return (
    <MainLayout>
      {hasError && <ServerErrorAlert />}
      <Navbar
        nowStartIndex={nowStartIndex}
        categories={categories}
        selectedIndex={selectedIndex}
        changeSelectedIndex={changeSelectedIndex}
      />
      {isLoding ? (
        <FoodListSkeleton></FoodListSkeleton>
      ) : (
        <FoodListContainer
          changeSelectedIndex={changeSelectedIndex}
          foodsByCategory={foodsByCategory}
          selectedIndex={selectedIndex}
        />
      )}
      <CartContainer />
      <Footer />
    </MainLayout>
  );
};
export default Main;

const MainLayout = styled.div`
  height: 100%;
  color: ${COLORS.primary};
  display: grid;
  grid-template-rows: 0.5fr 6fr 15.5rem 0.5fr;
`;
