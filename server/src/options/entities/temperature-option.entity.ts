import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TEMPERATURE_OPTION_TB')
export class TemperatureOption {
  @PrimaryGeneratedColumn()
  foodId: number;

  @Column({ type: 'decimal', nullable: true })
  hot: number;

  @Column({ type: 'decimal', nullable: true })
  cool: number;
}
