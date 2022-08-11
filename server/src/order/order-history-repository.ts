import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { OrderHistory } from './entities/orderHistory.entity';

@Injectable()
export class OrderHistoryRepository {
  constructor(
    @InjectRepository(OrderHistory)
    private readonly orederHistoryRepository: Repository<OrderHistory>,
  ) {}

  getOrederHistory() {
    return this.orederHistoryRepository.find({});
  }
  async saveOrderHistory(queryRunner, orderHistory: OrderHistory) {
    return await queryRunner.manager.save(orderHistory);
  }
  async getNextOrderNum(queryRunner, date) {
    const currentDate = new Date(date);
    const query = {
      where: {
        createdAt: Between(
          new Date(date.setHours(0, 0, 0, 0)),
          new Date(currentDate),
        ),
      },
      order: {
        orderNum: 'DESC',
      },
      take: 1,
    };
    const toDayOrderHistory = await queryRunner.manager.find(
      OrderHistory,
      query,
    );

    return toDayOrderHistory.length > 0 ? toDayOrderHistory[0].orderNum + 1 : 1;
  }
}
