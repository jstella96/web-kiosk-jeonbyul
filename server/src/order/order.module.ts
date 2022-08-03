import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderHistory } from './entities/orderHistory.entity';
import { OrderItem } from './entities/orderItem.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderHistory, OrderItem])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
