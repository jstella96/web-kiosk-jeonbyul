import axios from 'axios';
import { CategoryType } from 'types/category';
import { FoodsByCategoryType } from 'types/food';
import { OptionType } from 'types/option';
import { addOrderInfoType } from 'types/order';

const baseURL = process.env.REACT_APP_BACK_BASE_URL;

export const requestGetCategories = async (): Promise<CategoryType[]> => {
  const { data } = await axios.get(`${baseURL}/categories`);
  return data;
};

export const requestGetFoods = async (): Promise<FoodsByCategoryType[]> => {
  const response = await axios.get(`${baseURL}/foods`);
  return response.data;
};

export const requestGetOption = async (): Promise<OptionType> => {
  const response = await axios.get(`${baseURL}/options?temperature=1&size=1`);
  return response.data;
};

export const requestPostOrder = async (order: addOrderInfoType): Promise<number> => {
  const response = await axios.post(`${baseURL}/order`, order);
  return response.data;
};
