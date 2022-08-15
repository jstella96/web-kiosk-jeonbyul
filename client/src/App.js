import './App.scss';
import Router from './Router/Router.js';
import { OptionContext } from 'context/optionContext';
import { useEffect, useState } from 'react';
import { requestGetCategories, requestGetFoods, requestGetOption } from 'api/api';
import { OrderInfoContext } from 'context/orderInfoContext';
import { useOrderInfoState } from 'hooks/orderInfoState';
import { PageContext } from 'context/pageContext';

function App() {
  const [page, setPage] = useState('home');
  const [options, setOptions] = useState({});
  const [categories, setCategories] = useState([]);
  const [foodByCategory, setFoodByCategory] = useState([]);
  const { orderInfo, orderInfoDispatch, totalCount, totalPrice } = useOrderInfoState();

  useEffect(() => {
    fetchAndSetOPtions();
    fetchAndSetCategories();
    fetchAndSetFoods();
  }, []);

  const fetchAndSetOPtions = async () => {
    const options = await requestGetOption();
    setOptions(options);
  };

  const fetchAndSetCategories = async () => {
    const categoriesData = await requestGetCategories();
    setCategories(categoriesData);
  };

  const fetchAndSetFoods = async () => {
    const foodByCategory = await requestGetFoods();
    setFoodByCategory(foodByCategory);
  };

  return (
    <div className="App">
      <PageContext.Provider value={{ page, movePage: setPage }}>
        <OrderInfoContext.Provider value={{ orderInfo, orderInfoDispatch, totalCount, totalPrice }}>
          <OptionContext.Provider value={options}>
            <Router categories={categories} foodByCategory={foodByCategory}></Router>
          </OptionContext.Provider>
        </OrderInfoContext.Provider>
      </PageContext.Provider>
    </div>
  );
}
export default App;
