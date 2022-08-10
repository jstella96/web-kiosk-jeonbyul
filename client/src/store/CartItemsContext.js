import { createContext, useContext, useMemo, useReducer } from 'react';

const CartItemsContext = createContext(null);

const CartItemsDispatchContext = createContext(null);

export function CartItemsProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartItemsReducer, initialCartItems);

  const totalCount = useMemo(() => {
    return cartItems.reduce((acc, curr) => {
      return (acc += curr?.count);
    }, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, curr) => {
      const temperatureAdditionalPrice = curr?.temperatureOption?.additionalPrice || 0;
      const sizeAdditionalPrice = curr?.sizeOption?.additionalPrice || 0;
      const basePrice = curr?.food.basePrice || 0;
      const total = basePrice + temperatureAdditionalPrice + sizeAdditionalPrice;
      return acc + total * curr.count;
    }, 0);
  }, [cartItems]);

  return (
    <CartItemsContext.Provider value={{ cartItems, totalCount, totalPrice }}>
      <CartItemsDispatchContext.Provider value={dispatch}>
        {children}
      </CartItemsDispatchContext.Provider>
    </CartItemsContext.Provider>
  );
}

export function useCartItems() {
  return useContext(CartItemsContext);
}

export function useCartItemsDispatch() {
  return useContext(CartItemsDispatchContext);
}

function cartItemsReducer(CartItems, action) {
  switch (action.type) {
    case 'add': {
      const { count = 0, food, sizeOption, temperatureOption } = action.cartItem;
      const newCartItem = {
        count,
        food,
        sizeOption,
        temperatureOption
      };
      const nextCartItems = [...CartItems];
      for (let item of nextCartItems) {
        if (
          item.food.id === newCartItem.food.id &&
          item.sizeOption?.key === newCartItem.sizeOption?.key &&
          item.temperatureOption?.key === newCartItem.temperatureOption?.key
        ) {
          item.count += newCartItem.count;
          return nextCartItems;
        }
      }
      nextCartItems.push(newCartItem);
      return nextCartItems;
    }
    case 'changeCount': {
      return CartItems.map((item, index) => {
        if (index === action.index) {
          item.count = action.nextCount;
        }
        return item;
      });
    }
    case 'delete': {
      return CartItems.filter((item, index) => index !== action.index);
    }
    case 'clean': {
      return initialCartItems;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialCartItems = [];
