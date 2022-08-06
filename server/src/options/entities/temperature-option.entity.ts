import { Food } from 'src/foods/entities/food.entity';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity('TEMPERATURE_OPTION_TB')
export class TemperatureOption {
  @Column({ type: 'int', primary: true })
  foodId: number;

  @OneToOne(() => Food)
  @JoinColumn({ name: 'food_id', referencedColumnName: 'id' })

  food: Food;

  @Column({ type: 'decimal', nullable: true })
  hot: number;

  @Column({ type: 'decimal', nullable: true })
  cool: number;
}
