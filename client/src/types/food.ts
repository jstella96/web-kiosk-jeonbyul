import { CategoryType } from './category';

export interface FoodType {
  id: number;
  name: string;
  imgUrl: string;
  basePrice: number;
  categoryId: number;
}

export interface FoodsByCategoryType extends CategoryType {
  foods: FoodType[];
}

export interface FoodOptionType {
  label: string;
  additionalPrice: number;
  key: string;
}

export interface orderFoodType {
  foodId: number;
  foodName: string;
  unit: number;
  options: {
    size: string;
    temperature: string;
  };
  eachPrice: number;
}
