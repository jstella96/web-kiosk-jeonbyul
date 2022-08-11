import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from 'src/categories/categories.repository';
import { FoodsRepository } from './foods.repository';

@Injectable()
export class FoodsService {
  constructor(
    private readonly foodRepository: FoodsRepository,
    private readonly categoryRepository: CategoriesRepository,
  ) {}
  async getAllFoods() {
    /* 급하게 백엔드 데이터 형태 수정하느라, 이런 방식으로 작성했는데, 리팩토링 하면서 로직 수정하겠습니다 로직 수정하기  */
    const categories = await this.categoryRepository.getAllCategory();
    const newCategories = await Promise.all(
      categories.map(async (category, index) => {
        const foods = await this.getFoodByCategory(category.id);
        category.foods = foods;
        return category;
      }),
    );
    return newCategories;
  }

  getFood(id) {
    return this.foodRepository.getFood(id);
  }

  getFoodByCategory(categoryId) {
    return this.foodRepository.getFoodsByCategory(categoryId);
  }
}
