import { FoodType, FoodOptionType } from './food';

export interface CartItemType {
  id?: string;
  count: number;
  food: FoodType;
  sizeOption: FoodOptionType;
  temperatureOption: FoodOptionType;
}
