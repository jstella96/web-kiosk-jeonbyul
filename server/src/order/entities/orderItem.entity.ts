import { Food } from 'src/foods/entities/food.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Size } from '../enums/size.enum';
import { Temperature } from '../enums/temperature.enum';
import { OrderHistory } from './orderHistory.entity';

@Entity('ORDER_ITEMS_TB')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 30 })
  foodName: string;

  @Column({ type: 'int' })
  foodId: number;

  @Column({ type: 'int' })
  unit: number;

  @Column({ type: 'decimal' })
  eachPrice: number;

  @Column({ type: 'enum', enum: Size, nullable: true })
  size: String;

  @Column({ type: 'enum', enum: Temperature, nullable: true })
  temperature: String;

  /**
   * 1 : M 관계 설정
   * @ManyToOne -> 여러 item은 하나의 order history에 소속
   */
  @Column({ type: 'int' })
  orderHistoryId: number;

  @ManyToOne(() => OrderHistory, (orderHistory) => orderHistory.orderItems)
  @JoinColumn({ name: 'order_history_id' })
  orderHistory: OrderHistory;

  @ManyToOne(() => Food, (food) => food.orderItems)
  food: Food;

  static create({
    orderHistoryId,
    foodId,
    foodName,
    unit,
    options,
    eachPrice,
  }) {
    const orderItem = new OrderItem();
    orderItem.orderHistoryId = orderHistoryId;
    orderItem.foodId = foodId;
    orderItem.unit = unit;
    orderItem.foodName = foodName;
    orderItem.eachPrice = eachPrice;
    if (options?.size) orderItem.size = options.size;
    if (options?.temperature) orderItem.temperature = options.temperature;
    return orderItem;
  }

}
