import { Food } from 'src/foods/entities/food.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Size } from '../enums/size.enum';
import { Temperature } from '../enums/temperature.enum';
import { OrderHistory } from './orderHistory.entity';

@Entity('ORDER_ITEMS_TB')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 30 })
  foodName: number;

  @Column({ type: 'int' })
  foodId: number;

  @Column({ type: 'int' })
  unit: number;

  @Column({ type: 'decimal' })
  eachPrice: number;

  @Column({ type: 'enum', enum: Size })
  size: Size;

  @Column({ type: 'enum', enum: Temperature })
  temperature: Temperature;

  /**
   * 1 : M 관계 설정
   * @ManyToOne -> 여러 item은 하나의 order history에 소속
   */
  @ManyToOne(() => OrderHistory, (orderHistory) => orderHistory.orderItems)
  orderHistory: OrderHistory;

  @ManyToOne(() => Food, (food) => food.orderItems)
  food: Food;
}
