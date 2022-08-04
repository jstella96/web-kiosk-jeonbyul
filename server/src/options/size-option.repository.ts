import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SizeOption } from './entities/size-option.entity';

@Injectable()
export class SizeOptionsRepository {
  constructor(
    @InjectRepository(SizeOption)
    private readonly sizeOptionRepository: Repository<SizeOption>,
  ) {}
  getAllSizeOption() {
    return this.sizeOptionRepository.find({});
  }
}
