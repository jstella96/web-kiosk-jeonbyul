import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderHistory } from './entities/orderHistory.entity';

@Injectable()
export class OrderHistoryRepository {
  constructor(
    @InjectRepository(OrderHistory)
    private readonly orederHistoryRepository: Repository<OrderHistory>,
  ) {}
  getAllTemperatureOption() {
    return this.orederHistoryRepository.find({});
  }
}
