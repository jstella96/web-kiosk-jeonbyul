import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './entities/orderItem.entity';

@Injectable()
export class OrderItemRepository {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orederItemRepository: Repository<OrderItem>,
  ) {}
  getOrederItem() {
    return this.orederItemRepository.find({});
  }
  async saveOrderItem(queryRunner, orderItem: OrderItem) {
    await queryRunner.manager.save(orderItem);
    return;
  }
}
