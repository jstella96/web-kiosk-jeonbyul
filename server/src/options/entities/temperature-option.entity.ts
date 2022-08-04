import { Food } from 'src/foods/entities/food.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('TEMPERATURE_OPTION_TB')
export class TemperatureOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  foodId: number;

  @OneToOne(() => Food) // specify inverse side as a second parameter
  @JoinColumn()
  food: Food;

  @Column({ type: 'decimal', nullable: true })
  hot: number;

  @Column({ type: 'decimal', nullable: true })
  cool: number;
}
