import { Food } from 'src/foods/entities/food.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('CATEGORY_TB')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 10 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Food, (food) => food.category)
  foods: Food[];
}
