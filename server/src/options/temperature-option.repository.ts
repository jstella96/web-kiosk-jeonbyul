import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemperatureOption } from './entities/temperature-option.entity';

@Injectable()
export class TemperatureOptionsRepository {
  constructor(
    @InjectRepository(TemperatureOption)
    private readonly temperatureOptionRepository: Repository<TemperatureOption>,
  ) {}
  getAllTemperatureOption() {
    return this.temperatureOptionRepository.find({});
  }
}
