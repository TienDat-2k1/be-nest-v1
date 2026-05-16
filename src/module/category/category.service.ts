import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dtos/category.create.dto';
import { CategoryEntity } from './entity/category.entity';
import { CategoryRepository } from './repo/category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: CategoryRepository) {}

  create(createCategoryDTO: CreateCategoryDto) {
    const { name } = createCategoryDTO;

    const category: CategoryEntity = new CategoryEntity();

    category.name = name;

    return this.categoryRepo.create(category);
  }

  update() {}

  delete() {}
}
