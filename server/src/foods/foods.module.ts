import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food } from './entities/food.entity';
import { FoodsController } from './foods.controller';
import { FoodsRepository } from './foods.repository';
import { FoodsService } from './foods.service';

@Module({
  imports: [TypeOrmModule.forFeature([Food])],
  controllers: [FoodsController],
  providers: [FoodsService, FoodsRepository],
})
export class FoodsModule {}
