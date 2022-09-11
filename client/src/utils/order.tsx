import { CartItemType } from 'types/cart';

export const convertCartItemsTofoods = (cartItems: CartItemType[]) => {
  const foods = cartItems.map((item) => {
    const { count, food, sizeOption, temperatureOption } = item;
    const orderFood = {
      foodId: food?.id,
      foodName: food?.name,
      unit: count,
      options: {
        size: sizeOption.key,
        temperature: temperatureOption.key
      },
      eachPrice: food?.basePrice
    };
    return orderFood;
  });
  return foods;
};
