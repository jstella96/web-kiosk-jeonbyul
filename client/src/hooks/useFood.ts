import { requestGetFoods } from 'api/api';
import { useEffect, useState } from 'react';
import { FoodsByCategoryType } from 'types/food';

const useFood = () => {
  const [foodsByCategory, setFoodsByCategory] = useState<FoodsByCategoryType[]>([]);

  useEffect(() => {
    const fetchAndSetFoods = async () => {
      const foodsByCategory = await requestGetFoods();
      setFoodsByCategory(foodsByCategory);
    };
    fetchAndSetFoods();
  }, []);

  return { foodsByCategory };
};

export default useFood;
