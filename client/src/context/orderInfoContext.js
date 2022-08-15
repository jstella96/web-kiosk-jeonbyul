import { createContext, useContext } from 'react';

export const OrderInfoContext = createContext({
  orderInfo: {
    paymentMethod: '',
    inputAccount: 0,
    cartItems: []
  },
  orderInfoDispatch: () => {},
  totalCount: 0,
  totalPrice: 0
});

export function useOrderInfo() {
  return useContext(OrderInfoContext);
}
