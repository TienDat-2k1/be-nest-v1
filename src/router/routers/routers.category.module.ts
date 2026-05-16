import { Module } from '@nestjs/common';
import { CategoryController } from 'src/module/category/category.controller';
import { categoryModule } from 'src/module/category/category.module';

@Module({ controllers: [CategoryController], imports: [categoryModule] })
export class RouterCategoryModule {}
