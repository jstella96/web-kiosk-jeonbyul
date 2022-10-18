import { FoodType } from './food';

export interface CategoryType {
  id: number;
  name: string;
  foods: FoodType[];
}
