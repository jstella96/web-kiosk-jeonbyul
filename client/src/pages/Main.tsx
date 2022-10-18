import Navbar from 'components/Navbar/Navbar';
import FoodListContainer from 'components/FoodList/FoodList';
import CartContainer from 'components/Cart/Cart';
import Footer from 'components/Footer/Footer';
import styled from 'styled-components';
import COLORS from 'constants/color';
import { ServerErrorAlert } from 'components/common/ServerErrorAlert';
import { CategoryType } from 'types/category';
import { GET_CATEGORIES } from 'gql/gql';
import { useQuery } from '@apollo/client';
import { SliderProvider } from 'context/sliderContext';

interface CategoriesData {
  allCategories: CategoryType[];
}
const Main = () => {
  const { error, data } = useQuery<CategoriesData>(GET_CATEGORIES);

  return (
    <MainLayout>
      {error && <ServerErrorAlert />}
      <SliderProvider length={data ? data.allCategories.length : 0}>
        <Navbar categories={data?.allCategories} />
        <FoodListContainer categories={data?.allCategories} />
      </SliderProvider>
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
