import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesRepository } from 'src/categories/categories.repository';
import { Category } from 'src/categories/entities/categories.entity';
import { Food } from './entities/food.entity';
import { FoodsController } from './foods.controller';
import { FoodsRepository } from './foods.repository';
import { FoodsService } from './foods.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Food]),
    TypeOrmModule.forFeature([Category]),
  ],
  controllers: [FoodsController],
  providers: [FoodsService, FoodsRepository, CategoriesRepository],
})
export class FoodsModule {}
