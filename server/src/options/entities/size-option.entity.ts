import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SIZE_OPTION_TB')
export class SizeOption {
  @PrimaryGeneratedColumn()
  foodId: number;

  @Column({ type: 'decimal', nullable: true })
  small: number;

  @Column({ type: 'decimal', nullable: true })
  medium: number;

  @Column({ type: 'decimal', nullable: true })
  large: number;
}
