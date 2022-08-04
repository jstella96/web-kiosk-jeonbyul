import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  getAllCategory(): Promise<Category[]> {
    return this.categoryRepository.find({
      select: {
        id: true,
        name: true,
      },
    });
  }
}
