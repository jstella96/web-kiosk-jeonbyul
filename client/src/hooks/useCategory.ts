import { requestGetCategories } from 'api/api';
import { useEffect, useState } from 'react';
import { CategoryType } from '../types/category';

const useCategory = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchAndSetCategories = async () => {
      const categoriesData = await requestGetCategories();
      setCategories(categoriesData);
    };
    fetchAndSetCategories();
  }, []);

  return { categories };
};

export default useCategory;
