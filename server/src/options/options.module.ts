import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { SizeOption } from './entities/size-option.entity';
import { TemperatureOption } from './entities/temperature-option.entity';
import { OptionsController } from './options.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([SizeOption]),
    TypeOrmModule.forFeature([TemperatureOption]),
  ],
  controllers: [OptionsController],
  providers: [CategoriesService],
})
export class OptionsModule {}
