import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesRepository } from './categories.repository';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoriesRepository) {}

  getAllCategory() {
    return this.categoryRepository.getAllCategory();
  }
}
