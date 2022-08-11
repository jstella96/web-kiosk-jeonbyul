import { createContext, useContext } from 'react';

export const CartItemsContext = createContext({ cartItems: [], totalCount: 0, totalPrice: 0 });

export function useCartItems() {
  return useContext(CartItemsContext);
}
