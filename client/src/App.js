import './App.scss';
import Router from './Router/Router.js';
import { OptionContext } from 'context/optionContext';
import { useEffect, useState } from 'react';
import { requestGetCategories, requestGetFoods, requestGetOption } from 'api/api';
import { OrderInfoContext } from 'context/orderInfoContext';
import { useOrderInfoState } from 'hooks/orderInfoState';

function App() {
  const { orderInfo, orderInfoDispatch, totalCount, totalPrice } = useOrderInfoState();

  const [options, setOptions] = useState({});
  const [categories, setCategories] = useState([]);
  const [foodByCategory, setFoodByCategory] = useState([]);

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
      <OrderInfoContext.Provider value={{ orderInfo, orderInfoDispatch, totalCount, totalPrice }}>
        <OptionContext.Provider value={options}>
          <Router categories={categories} foodByCategory={foodByCategory}></Router>
        </OptionContext.Provider>
      </OrderInfoContext.Provider>
    </div>
  );
}
export default App;
