import { createContext, useContext } from 'react';
interface Food {
  id: number;
  name: string;
  imgUrl: string;
  categoryId: number;
  basePrice: string;
}

interface OptionInterface {
  label: string;
  additionalPrice: string;
  key: string;
}

interface CartItem {
  count: string;
  food: Food;
  sizeOption: OptionInterface;
  temperatureOption: OptionInterface;
}

interface OrderInfoDispatch extends React.DispatchWithoutAction {}

interface OrderInfo {
  orderInfo: {
    paymentMethod: string;
    inputAccount: number;
    cartItems: CartItem[];
  };
  orderInfoDispatch: OrderInfoDispatch;
  totalCount: number;
  totalPrice: number;
}

export const OrderInfoContext = createContext<OrderInfo | null>(null);

export function useOrderInfo(component?: string) {
  const context = useContext(OrderInfoContext);
  if (context === null) {
    throw new Error(`<${component}/> should be <OptionContext.Provider/> children`);
  }
  return context;
}

OrderInfoContext.displayName = 'OrderContext';
