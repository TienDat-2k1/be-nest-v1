import { Injectable } from '@nestjs/common';
import { DatabaseRepositoryBase } from 'src/common/database/bases/database.repository';
import { CategoryDoc, CategoryEntity } from '../entity/category.entity';
import { Model, PopulateOptions } from 'mongoose';
import { InjectDatabaseModel } from 'src/common/database/decorators/database.decorator';

@Injectable()
export class CategoryRepository extends DatabaseRepositoryBase<
  CategoryEntity,
  CategoryDoc
> {
  readonly _joinActive: PopulateOptions[] = [];
  constructor(
    @InjectDatabaseModel(CategoryEntity.name)
    private readonly categoryModel: Model<CategoryEntity>,
  ) {
    super(categoryModel);
  }
}
