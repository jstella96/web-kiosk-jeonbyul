import { Controller, Get, Query } from '@nestjs/common';
import { FoodsService } from './foods.service';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodService: FoodsService) {}
  @Get()
  findFood(@Query() query) {
    const { categoryId } = query;
    if (!categoryId) {
      return this.foodService.getAllFoods();
    } else {
      return this.foodService.getFood(categoryId);
    }
  }
}
