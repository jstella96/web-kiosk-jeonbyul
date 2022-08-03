import { Injectable } from '@nestjs/common';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodsService {
  find() {}

  findAll(): Food[] {
    return null;
  }
}
