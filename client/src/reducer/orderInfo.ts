import { CartItemType } from 'types/cart';
import { OrderInfoType } from 'types/order';

export const initialOrderInfo: OrderInfoType = {
  paymentMethod: '',
  inputAmount: 0,
  cartItems: []
};

export const ORDER_INFO_ACTIONS = {
  ADD_CARTITEM: 'add-cartItem',
  UPDATE_COUNT: 'update-count',
  DELETE_CARTITEM: 'delete-cartItem',
  CLEAR_CART: 'clear-cart',
  CLEAR_ORDERINFO: 'clear-orederinfo',
  UPDATE_METHOD_AND_ACCOUNT: 'update_method_and_account'
};

export const addCartItem = (payload: CartItemType) => {
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
export const updateMethodAndAccount = (payload: { inputAmount: number; paymentMethod: string }) => {
  return {
    type: ORDER_INFO_ACTIONS.UPDATE_METHOD_AND_ACCOUNT,
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
  | ReturnType<typeof updateMethodAndAccount>
  | ReturnType<typeof clearOrderInfo>;

function isEqualCartItem(cartItem: CartItemType, newCartItem: CartItemType) {
  if (
    cartItem.food.id === newCartItem.food.id &&
    cartItem.sizeOption?.key === newCartItem.sizeOption?.key &&
    cartItem.temperatureOption?.key === newCartItem.temperatureOption?.key
  ) {
    return true;
  }
  return false;
}

export function orderInfoReducer(orderInfo: OrderInfoType, action: OrderInfoAction): OrderInfoType {
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

    case ORDER_INFO_ACTIONS.UPDATE_METHOD_AND_ACCOUNT: {
      const { type, ...payload } = action as ReturnType<typeof updateMethodAndAccount>;
      const { inputAmount, paymentMethod } = payload;
      return {
        ...orderInfo,
        inputAmount,
        paymentMethod
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
