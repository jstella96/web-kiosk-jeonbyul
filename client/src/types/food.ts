import { CategoryType } from './category';

export interface FoodType {
  id: number;
  name: string;
  imgUrl: string;
  basePrice: string;
  categoryId: number;
}
export interface FoodsByCategoryType extends CategoryType {
  foods: FoodType[];
}
