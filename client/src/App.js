import './App.scss';
import Router from './Router/Router.js';
import { OptionContext, OptionProvider } from 'context/optionContext';
import { useCartItemState } from './hooks/useCartItemState';
import { CartItemsContext } from 'hooks/useCartItems';
import { CartItemsDispatchContext } from 'hooks/useCartItemsDispatch';
import { useEffect, useState } from 'react';
import { requestGetCategories, requestGetFoods, requestGetOption } from 'api/api';

function App() {
  const { cartItems, cartItemsDispatch, totalCount, totalPrice } = useCartItemState();
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
      <CartItemsContext.Provider value={{ cartItems, totalCount, totalPrice }}>
        <CartItemsDispatchContext.Provider value={{ cartItemsDispatch }}>
          <OptionContext.Provider value={options}>
            <Router categories={categories} foodByCategory={foodByCategory}></Router>
          </OptionContext.Provider>
        </CartItemsDispatchContext.Provider>
      </CartItemsContext.Provider>
    </div>
  );
}
export default App;
