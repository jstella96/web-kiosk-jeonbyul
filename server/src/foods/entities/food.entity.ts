import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
