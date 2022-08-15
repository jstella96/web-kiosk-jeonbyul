import React, { useMemo, useReducer } from 'react';

interface Food {
  id: number;
  name: string;
  imgUrl: string;
  categoryId: number;
  basePrice: number;
}
interface Option {
  label: string;
  additionalPrice: string;
  key: string;
}

interface CartItem {
  id?: string;
  count: number;
  food: Food;
  sizeOption: Option;
  temperatureOption: Option;
}

interface OrderInfo {
  paymentMethod: string;
  inputAmount: number;
  cartItems: CartItem[];
}

export const ORDER_INFO_ACTIONS = {
  ADD_CARTITEM: 'add-cartItem',
  UPDATE_COUNT: 'update-count',
  DELETE_CARTITEM: 'delete-cartItem',
  CLEAR_CART: 'clear-cart',
  UPDATE_PAYMENT_METHOD: 'update-paymentMethod',
  UPDATE_INPUT_ACCOUNT: 'update-inputAmount',
  CLEAR_ORDERINFO: 'clear-orederinfo'
};

export const addCartItem = (payload: CartItem) => {
  return {
    type: ORDER_INFO_ACTIONS.ADD_CARTITEM,
    ...payload
  };
};
export const updateCount = (payload: { index: number; nextCount: number }) => {
  return {
    type: ORDER_INFO_ACTIONS.UPDATE_COUNT,
    ...payload
  };
};
export const deleteCartItem = (payload: { index: number }) => {
  return {
    type: ORDER_INFO_ACTIONS.DELETE_CARTITEM,
    ...payload
  };
};
export const clearCart = () => {
  return {
    type: ORDER_INFO_ACTIONS.CLEAR_CART
  };
};
export const updatePaymentMethod = (payload: { paymentMethod: string }) => {
  return {
    type: ORDER_INFO_ACTIONS.UPDATE_PAYMENT_METHOD,
    ...payload
  };
};
export const updateInputAmount = (payload: { inputAmount: number }) => {
  return {
    type: ORDER_INFO_ACTIONS.UPDATE_INPUT_ACCOUNT,
    ...payload
  };
};
export const clearOrderInfo = () => {
  return {
    type: ORDER_INFO_ACTIONS.CLEAR_ORDERINFO
  };
};

export type OrderInfoAction =
  | ReturnType<typeof addCartItem>
  | ReturnType<typeof updateCount>
  | ReturnType<typeof deleteCartItem>
  | ReturnType<typeof clearCart>
  | ReturnType<typeof updatePaymentMethod>
  | ReturnType<typeof updateInputAmount>
  | ReturnType<typeof clearOrderInfo>;

function isEqualCartItem(cartItem: CartItem, newCartItem: CartItem) {
  if (
    cartItem.food.id === newCartItem.food.id &&
    cartItem.sizeOption?.key === newCartItem.sizeOption?.key &&
    cartItem.temperatureOption?.key === newCartItem.temperatureOption?.key
  ) {
    return true;
  }
  return false;
}

function orderInfoReducer(orderInfo: OrderInfo, action: OrderInfoAction): OrderInfo {
  switch (action.type) {
    case ORDER_INFO_ACTIONS.ADD_CARTITEM: {
      const { type, ...payload } = action as ReturnType<typeof addCartItem>;
      const { count = 0, food, sizeOption, temperatureOption } = payload;
      const { cartItems } = orderInfo;
      const newCartItem = {
        id: new Date().getTime().toString(16),
        count,
        food,
        sizeOption,
        temperatureOption
      };
      const nextCartItems = [...cartItems];
      for (let cartItem of nextCartItems) {
        if (isEqualCartItem(cartItem, newCartItem)) {
          cartItem.count += newCartItem.count;
          return { ...orderInfo, cartItems: nextCartItems };
        }
      }
      return { ...orderInfo, cartItems: [...cartItems, newCartItem] };
    }

    case ORDER_INFO_ACTIONS.UPDATE_COUNT: {
      const { type, ...payload } = action as ReturnType<typeof updateCount>;
      const { index, nextCount } = payload;
      const { cartItems } = orderInfo;
      return {
        ...orderInfo,
        cartItems: cartItems.map((cartItem, cartItemIndex) => {
          if (cartItemIndex === index) {
            return { ...cartItem, count: nextCount };
          }
          return cartItem;
        })
      };
    }

    case ORDER_INFO_ACTIONS.DELETE_CARTITEM: {
      const { type, ...payload } = action as ReturnType<typeof deleteCartItem>;
      const { index } = payload;
      console.log(index);
      const { cartItems } = orderInfo;
      return {
        ...orderInfo,
        cartItems: cartItems.filter((cartItem, cartItemIndex) => cartItemIndex !== index)
      };
    }

    case ORDER_INFO_ACTIONS.CLEAR_CART: {
      return {
        ...orderInfo,
        cartItems: []
      };
    }

    case ORDER_INFO_ACTIONS.UPDATE_PAYMENT_METHOD: {
      const { type, ...payload } = action as ReturnType<typeof updatePaymentMethod>;
      const { paymentMethod } = payload;
      return {
        ...orderInfo,
        paymentMethod
      };
    }

    case ORDER_INFO_ACTIONS.UPDATE_INPUT_ACCOUNT: {
      const { type, ...payload } = action as ReturnType<typeof updateInputAmount>;
      const { inputAmount } = payload;
      return {
        ...orderInfo,
        inputAmount
      };
    }

    case ORDER_INFO_ACTIONS.CLEAR_ORDERINFO: {
      return { ...initialOrderInfo };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialOrderInfo: OrderInfo = {
  paymentMethod: '',
  inputAmount: 0,
  cartItems: []
};

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
