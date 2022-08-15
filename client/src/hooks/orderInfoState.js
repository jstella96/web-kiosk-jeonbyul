import { useMemo, useReducer } from 'react';
const initialOrderInfo = {
  paymentMethod: '',
  inputAccount: 0,
  cartItems: []
};

function isEqualCartItem(cartItem, newCartItem) {
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
  UPDATE_INPUT_ACCOUNT: 'update-inputAccount'
};

function orderInfoReducer(orderInfo, action) {
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
      const { index, nextCount } = action.payload;
      const { cartItems } = orderInfo;
      return {
        ...orderInfo,
        cartItems: cartItems.map((cartItem, cartItemIndex) => {
          if (cartItemIndex === index) {
            return { ...cartItem, count: nextCount };
          }
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

    case ORDER_INFO_ACTIONS.UPDATE_PAYMENT_METHOD: {
      return { ...initialOrderInfo };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export const useOrderInfoState = () => {
  const [orderInfo, orderInfoDispatch] = useReducer(orderInfoReducer, initialOrderInfo);
  const { cartItems } = orderInfo;
  const totalCount = useMemo(() => {
    return cartItems.reduce((acc, curr) => {
      return (acc += curr.count);
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
