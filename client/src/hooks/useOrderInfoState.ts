import { useMemo, useReducer } from 'react';
import { initialOrderInfo, orderInfoReducer } from 'reducer/orderInfo';

export const useOrderInfoState = () => {
  const [orderInfo, orderInfoDispatch] = useReducer(orderInfoReducer, initialOrderInfo);
  const { cartItems } = orderInfo;

  const totalCount = useMemo(() => {
    return cartItems.reduce((acc, curr) => {
      return acc + curr.count;
    }, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, curr) => {
      const temperatureAdditionalPrice = curr.temperatureOption?.additionalPrice || 0;
      const sizeAdditionalPrice = curr.sizeOption?.additionalPrice || 0;
      const basePrice = curr?.food.basePrice || 0;
      const total = +basePrice + +temperatureAdditionalPrice + +sizeAdditionalPrice;
      return acc + total * curr.count;
    }, 0);
  }, [cartItems]);

  return { orderInfo, orderInfoDispatch, totalCount, totalPrice };
};
