import { createContext, useContext } from 'react';

export const CartItemsDispatchContext = createContext({ cartItemsDispatch: () => {} });

export function useCartItemsDispatch() {
  return useContext(CartItemsDispatchContext);
}
