import { OrderInfoAction } from 'reducer/orderInfo';
import { createContext, useContext } from 'react';
import { OrderInfoType } from 'types/order';
import { useOrderInfoState } from 'hooks/useOrderInfoState';

interface OrderDetailInfo {
  orderInfo: OrderInfoType;
  orderInfoDispatch: React.Dispatch<OrderInfoAction>;
  totalCount: number;
  totalPrice: number;
}

export const OrderInfoContext = createContext<OrderDetailInfo | null>(null);

export function useOrderInfo(component?: string) {
  const context = useContext(OrderInfoContext);
  if (context === null) {
    throw new Error(`<${component}/> should be <OrderInfoContext.Provider/> children`);
  }
  return context;
}

OrderInfoContext.displayName = 'OrderInfoContext';

interface Props {
  children: React.ReactNode;
}

export const OrderInfoProvider = ({ children }: Props) => {
  const { orderInfo, orderInfoDispatch, totalCount, totalPrice } = useOrderInfoState();
  return (
    <OrderInfoContext.Provider value={{ orderInfo, orderInfoDispatch, totalCount, totalPrice }}>
      {children}
    </OrderInfoContext.Provider>
  );
};
