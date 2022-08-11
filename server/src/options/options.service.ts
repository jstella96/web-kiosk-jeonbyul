import { Injectable } from '@nestjs/common';
import { SizeOptionsRepository } from './size-option.repository';
import { TemperatureOptionsRepository } from './temperature-option.repository';

@Injectable()
export class OptionsService {
  constructor(
    private readonly sizeOptionsRepository: SizeOptionsRepository,
    private readonly temperatureOptionsRepository: TemperatureOptionsRepository,
  ) {}
  async getOptions({ hasTemperature, hasSize }) {
    const option = {};

    if (hasTemperature) {
      const temperature =
        await this.temperatureOptionsRepository.getAllTemperatureOption();
      option['temperature'] = temperature.reduce((acc, cur) => {
        const { foodId, cool, hot } = cur;
        acc[foodId] = { c: cool, h: hot };
        return acc;
      }, {});
    }
    if (hasSize) {
      const size = await this.sizeOptionsRepository.getAllSizeOption();
      option['size'] = size.reduce((acc, cur) => {
        const { foodId, small, medium, large } = cur;
        acc[foodId] = { s: small, m: medium, l: large };
        return acc;
      }, {});
    }
    return option;
  }
}
