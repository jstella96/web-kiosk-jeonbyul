import { Injectable } from '@nestjs/common';
import { FoodsRepository } from './foods.repository';

@Injectable()
export class FoodsService {
  constructor(private readonly foodRepository: FoodsRepository) {}
  getAllFoods() {
    return this.foodRepository.getAllFoods();
  }

  getFood(id) {
    return this.foodRepository.getFood(id);
  }
}
