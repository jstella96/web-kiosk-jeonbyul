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
  id: string;
  count: number;
  food: Food;
  sizeOption: Option;
  temperatureOption: Option;
}

interface OrderInfo {
  paymentMethod: string;
  inputAccount: number;
  cartItems: CartItem[];
}

function isEqualCartItem(cartItem: CartItem, newCartItem: CartItem) {
  if (
    cartItem.food.id === newCartItem.food.id &&
    cartItem.sizeOption?.key === newCartItem.sizeOption?.key &&
    cartItem.temperatureOption?.key === newCartItem.temperatureOption?.key
  ) {
    return false;
  }
  return true;
}

export const ORDER_INFO_ACTIONS = {
  ADD_CARTITEM: 'add-cartItem',
  UPDATE_COUNT: 'update-count',
  DELETE_CARTITEM: 'delete-cartItem',
  CLEAN_CARTITEM: 'clean-cartItem',
  UPDATE_PAYMENT_METHOD: 'update-paymentMethod',
  UPDATE_INPUT_ACCOUNT: 'update-inputAccount',
  CLEAN_ORDERINFO: 'clean-orederinfo'
};

type OrderAction = { type: keyof typeof ORDER_INFO_ACTIONS; payload: any };

function orderInfoReducer(orderInfo: OrderInfo, action: OrderAction): OrderInfo {
  switch (action.type) {
    case ORDER_INFO_ACTIONS.ADD_CARTITEM: {
      const { count = 0, food, sizeOption, temperatureOption } = action.payload.cartItem;
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
      const { index, nextCount } = action.payload as { index: number; nextCount: number };
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
      const { cartItems } = orderInfo;
      const { index } = action.payload;
      return {
        ...orderInfo,
        cartItems: cartItems.filter((cartItem, cartItemIndex) => cartItemIndex !== index)
      };
    }

    case ORDER_INFO_ACTIONS.CLEAN_CARTITEM: {
      return {
        ...orderInfo,
        cartItems: []
      };
    }

    case ORDER_INFO_ACTIONS.UPDATE_PAYMENT_METHOD: {
      const { paymentMethod } = action.payload;

      return {
        ...orderInfo,
        paymentMethod
      };
    }

    case ORDER_INFO_ACTIONS.UPDATE_INPUT_ACCOUNT: {
      const { inputAccount } = action.payload;
      return {
        ...orderInfo,
        inputAccount
      };
    }

    case ORDER_INFO_ACTIONS.CLEAN_ORDERINFO: {
      return { ...initialOrderInfo };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialOrderInfo: OrderInfo = {
  paymentMethod: '',
  inputAccount: 0,
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
