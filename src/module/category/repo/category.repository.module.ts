import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryEntity, CategorySchema } from '../entity/category.entity';
import { CategoryRepository } from './category.repository';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constant/database.constant';

@Module({
  controllers: [],
  exports: [CategoryRepository],
  imports: [
    MongooseModule.forFeature(
      [{ name: CategoryEntity.name, schema: CategorySchema }],
      DATABASE_CONNECTION_NAME,
    ),
  ],
  providers: [CategoryRepository],
})
export class CategoryRepositoryModule {}
