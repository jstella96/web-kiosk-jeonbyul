import { useOrderInfo } from 'context/orderInfoContext';
import { useEffect, useState } from 'react';
import { addCartItem, updateCount } from 'reducer/orderInfo';
import { CartItemType } from 'types/cart';
import { FoodType } from 'types/food';
import { convertOptionKeyToLabel } from 'utils/option';
import useOption from './useOption';

const useCartItem = (food: FoodType) => {
  const { options } = useOption();
  const { orderInfoDispatch, orderInfo } = useOrderInfo();
  const temperatureOptions = convertOptionKeyToLabel(options.temperature[food.id], 'temprature');
  const sizeOptions = convertOptionKeyToLabel(options.size[food.id], 'size');

  const initialCartItem = {
    food: food,
    count: 1,
    sizeOption: sizeOptions.length !== 0 ? sizeOptions[0] : null,
    temperatureOption: temperatureOptions.length !== 0 ? temperatureOptions[0] : null
  };

  const [cartItem, setCartItem] = useState(initialCartItem);

  const changeCartItem = (key: string) => (nextValue: any) => {
    return setCartItem((prev) => {
      return {
        ...prev,
        [key]: nextValue
      };
    });
  };

  const addCart = () => {
    const { cartItems } = orderInfo;
    console.log(cartItem);
    const index = getEqualCartItem(cartItems, cartItem);
    if (index === -1) {
      orderInfoDispatch(addCartItem(cartItem));
    } else {
      orderInfoDispatch(
        updateCount({ index: index, nextCount: cartItems[index].count + cartItem.count })
      );
    }
  };

  const init = () => {
    setCartItem(initialCartItem);
  };

  useEffect(() => {
    setCartItem(initialCartItem);
  }, [options]);

  const getEqualCartItem = (cartItems: CartItemType[], newCartItem: CartItemType) => {
    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i];
      if (
        cartItem.food.id === newCartItem.food.id &&
        cartItem.sizeOption?.key === newCartItem.sizeOption?.key &&
        cartItem.temperatureOption?.key === newCartItem.temperatureOption?.key
      ) {
        return i;
      }
    }
    return -1;
  };

  return { sizeOptions, temperatureOptions, changeCartItem, addCart, init };
};
export default useCartItem;
