import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { OrderHistory } from './orderHistory.entity';

export enum Size {
  s = 's',
  m = 'm',
  l = 'l',
}

export enum Temperature {
  h = 'h',
  c = 'c',
}

@Entity('ORDER_ITEMS_TB')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;
  /**
   * 1 : M 관계 설정
   * @ManyToOne -> 여러 item은 하나의 order history에 소속
   */
  @ManyToOne(() => OrderHistory, (orderHistory) => orderHistory.id)
  @Column({ name: 'order_history_id', type: 'int' })
  orderHistory: OrderHistory;

  @Column({ type: 'char', length: 30 })
  foodName: number;

  @Column({ type: 'int' })
  foodId: number;

  @Column({ type: 'int' })
  unit: number;

  @Column({ type: 'decimal' })
  eachPrice: number;

  @Column({ type: 'enum', enum: Size })
  size: 's' | 'm' | 'l';

  @Column({ type: 'enum', enum: Temperature })
  temperature: 'c' | 'h';
}
