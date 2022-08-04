import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodsRepository {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,
  ) {}

  getAllFoods(): Promise<Food[]> {
    return this.foodRepository.find({});
  }
  getFood(id): Promise<Food> {
    return this.foodRepository.findOne({
      where: { id },
    });
  }
}
