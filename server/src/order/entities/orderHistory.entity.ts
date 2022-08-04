import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { OrderItem } from './orderItem.entity';

@Entity('ORDER_HISTORY_TB')
export class OrderHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', default: 1 })
  orderNum: number;

  @Column({ type: 'decimal' })
  totalPrice: number;

  //여기 enum은 어떨까요 확정
  @Column({ type: 'char', length: 5 })
  payment: number;

  @Column({ type: 'tinyint', default: 0 })
  cancel: number;
  //db 쿼리상에 여기만 datetime(6), 맟추기
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.orderHistory)
  orderItems: OrderItem[];
}
