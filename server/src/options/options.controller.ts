import { Controller, Get, Query } from '@nestjs/common';
import { OptionsService } from './options.service';

@Controller('options')
export class OptionsController {
  constructor(private readonly optionService: OptionsService) {}
  @Get()
  getOption(@Query() query) {
    const { temperature = 0, size = 0 } = query;
    return this.optionService.getOptions({
      hasTemperature: temperature,
      hasSize: size,
    });
  }
}
