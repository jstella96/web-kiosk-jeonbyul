import { useQuery } from '@apollo/client';
import { useOrderInfo } from 'context/orderInfoContext';
import { GET_OPTIONS } from 'gql/gql';
import { useEffect, useState } from 'react';
import { addCartItem, updateCount } from 'reducer/orderInfo';
import { CartItemType } from 'types/cart';
import { FoodType } from 'types/food';
import { OptionType } from 'types/option';
import { convertOptionKeyToLabel } from 'utils/option';
interface OptionData {
  option: OptionType;
}
const useCartItem = (food: FoodType) => {
  const { data } = useQuery<OptionData>(GET_OPTIONS, {
    variables: { optionId: food.id } // variables: {email, password}
  });

  const { orderInfoDispatch, orderInfo } = useOrderInfo();
  const temperatureOptions = convertOptionKeyToLabel(data?.option.temperature, 'temprature');
  const sizeOptions = convertOptionKeyToLabel(data?.option.size, 'size');

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
  }, [data]);

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
