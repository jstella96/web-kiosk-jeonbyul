import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizeOption } from './entities/size-option.entity';
import { TemperatureOption } from './entities/temperature-option.entity';
import { OptionsController } from './options.controller';
import { OptionsService } from './options.service';
import { SizeOptionsRepository } from './size-option.repository';
import { TemperatureOptionsRepository } from './temperature-option.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SizeOption]),
    TypeOrmModule.forFeature([TemperatureOption]),
  ],
  controllers: [OptionsController],
  providers: [
    OptionsService,
    SizeOptionsRepository,
    TemperatureOptionsRepository,
  ],
})
export class OptionsModule {}
