import { CategoryType } from './category';

export interface FoodType {
  id: number;
  name: string;
  imgUrl: string;
}
export interface FoodsByCategoryType extends CategoryType {
  foods: FoodType[];
}
