import { Injectable } from '@nestjs/common';
import Connection from 'mysql2/typings/mysql/lib/Connection';
import { SizeOptionsRepository } from 'src/options/size-option.repository';
import { EntityManager } from 'typeorm';
import { CreateOrderDto } from './dto/create-order-dto';
import { OrderHistory } from './entities/orderHistory.entity';
import { OrderItem } from './entities/orderItem.entity';
import { OrderHistoryRepository } from './order-history-repository';
import { OrderItemRepository } from './order-item-repository';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderHistoryRepository: OrderHistoryRepository,
    private readonly orderItemRepository: OrderItemRepository,
    private readonly entityManager: EntityManager,
  ) {}

  async createOrder(creteOrderDto: CreateOrderDto) {
    const queryRunner = this.entityManager.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const { foods, payment, date } = creteOrderDto;
      const totalPrice = this.calculateTotalPrice(foods);

      //1. 다음 주문번호 받기
      const nextOrderNum = await this.orderHistoryRepository.getNextOrderNum(
        queryRunner,
        new Date(date),
      );

      //2. 새로운 주문서 생성
      const newOrder = OrderHistory.create({
        totalPrice,
        payment,
        orderNum: nextOrderNum,
      });

      const createdOrder = await this.orderHistoryRepository.saveOrderHistory(
        queryRunner,
        newOrder,
      );

      //3. 주문서 번호를 가진 각각의 판매상품목록을 저장
      Promise.all(
        foods.map(async (food) => {
          food.orderHistoryId = createdOrder.id;
          const createOrderItem = OrderItem.create(food);
          await this.orderItemRepository.saveOrderItem(
            queryRunner,
            createOrderItem,
          );
        }),
      );

      await queryRunner.commitTransaction();
      await queryRunner.release();
      return nextOrderNum;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      console.log(err);
      return 0;
    }
  }

  calculateTotalPrice(foods) {
    const totalPrice = foods.reduce((acc, cur) => {
      const { eachPrice, unit } = cur;
      return acc + eachPrice * unit;
    }, 0);
    return +totalPrice;
  }
}
