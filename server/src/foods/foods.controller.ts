import { Controller, Get } from '@nestjs/common';
import { FoodsService } from './foods.service';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodService: FoodsService) {}
  @Get()
  findAll() {
    //return this.foodService.findAll();
    return 'test';
  }
}
