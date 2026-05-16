import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/category.create.dto';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() body: CreateCategoryDto) {
    console.log(body);
    return this.categoryService.create(body);
  }

  @Patch()
  update() {}

  @Patch()
  delete() {}
}
