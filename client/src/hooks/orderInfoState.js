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

function orderInfoReducer(orderInfo, action) {
  switch (action.type) {
    case 'add-cartItem': {
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

    case 'update-count': {
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

    case 'delete-cartItem': {
      const { cartItems } = orderInfo;
      const { index } = action.payload;
      return {
        ...orderInfo,
        cartItems: cartItems.filter((cartItem, cartItemIndex) => cartItemIndex !== index)
      };
    }

    case 'clean-cartItem': {
      return {
        ...orderInfo,
        cartItems: []
      };
    }

    case 'update-paymentMethod': {
      const { paymentMethod } = action.payload;

      return {
        ...orderInfo,
        paymentMethod
      };
    }

    case 'update-inputAccount': {
      const { inputAccount } = action.payload;
      return {
        ...orderInfo,
        inputAccount
      };
    }

    case 'clean-orderinfo': {
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
