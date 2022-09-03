import { OrderInfo, OrderInfoAction } from 'hooks/orderInfoState';
import { createContext, useContext } from 'react';

interface OrderDetailInfo {
  orderInfo: OrderInfo;
  orderInfoDispatch: React.Dispatch<OrderInfoAction>;
  totalCount: number;
  totalPrice: number;
}

export const OrderInfoContext = createContext<OrderDetailInfo | null>(null);

export function useOrderInfo(component?: string) {
  const context = useContext(OrderInfoContext);
  if (context === null) {
    throw new Error(`<${component}/> should be <OptionContext.Provider/> children`);
  }
  return context;
}

OrderInfoContext.displayName = 'OrderContext';
