import { CartItemType } from './cart';
import { orderFoodType } from './food';

export interface OrderInfoType {
  paymentMethod: string;
  inputAmount: number;
  cartItems: CartItemType[];
}

export interface addOrderInfoType {
  foods: orderFoodType[];
  payment: string;
  date: Date;
}
