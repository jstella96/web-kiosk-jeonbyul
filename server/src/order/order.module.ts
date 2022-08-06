import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderHistory } from './entities/orderHistory.entity';
import { OrderItem } from './entities/orderItem.entity';
import { OrderHistoryRepository } from './order-history-repository';
import { OrderItemRepository } from './order-item-repository';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderHistory, OrderItem])],
  controllers: [OrderController],
  providers: [OrderService, OrderHistoryRepository, OrderItemRepository],
})
export class OrderModule {}
