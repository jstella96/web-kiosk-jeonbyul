import { Food } from 'src/foods/entities/food.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity('SIZE_OPTION_TB')
export class SizeOption {
  @PrimaryGeneratedColumn()
  id: number;

  // 관계에 의해 생성된 열과같은 이름의 @Column을 사용하여 엔터티에 다른 속성을 추가하면 됨.
  // 해당 필드의 경우 이 엔터티의 id를 이용해 해당 속성을 채움
  @Column({ nullable: true })
  foodId: number;

  @OneToOne(() => Food) // specify inverse side as a second parameter
  @JoinColumn()
  food: Food;

  @Column({ type: 'decimal', nullable: true })
  small: number;

  @Column({ type: 'decimal', nullable: true })
  medium: number;

  @Column({ type: 'decimal', nullable: true })
  large: number;
}
