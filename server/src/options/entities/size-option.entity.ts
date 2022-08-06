import { Food } from 'src/foods/entities/food.entity';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity('SIZE_OPTION_TB')
export class SizeOption {
  @Column({ type: 'int', primary: true })
  foodId: number;

  @OneToOne(() => Food)
  @JoinColumn({ name: 'food_id', referencedColumnName: 'id' })

  food: Food;

  @Column({ type: 'decimal', nullable: true })
  small: number;

  @Column({ type: 'decimal', nullable: true })
  medium: number;

  @Column({ type: 'decimal', nullable: true })
  large: number;
}
