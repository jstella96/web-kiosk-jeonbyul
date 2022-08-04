import { Category } from 'src/categories/entities/categories.entity';
import { OrderItem } from 'src/order/entities/orderItem.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('FOOD_TB')
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 30, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 200 })
  imgUrl: string;

  @Column({ type: 'int' })
  categoryId: number;

  @Column({ type: 'decimal' })
  basePrice: number;

  @ManyToOne(() => Category, (category) => category.foods)
  category: Category;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.food)
  orderItems: OrderItem[];
}
