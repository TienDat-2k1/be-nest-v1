import { Injectable } from '@nestjs/common';
import { DatabaseRepositoryBase } from 'src/common/database/bases/database.repository';
import { ProductEntity, ProductDoc } from '../entities/product.entity';
import { Model, PopulateOptions } from 'mongoose';
import { InjectDatabaseModel } from 'src/common/database/decorators/database.decorator';

@Injectable()
export class ProductRepository extends DatabaseRepositoryBase<
  ProductEntity,
  ProductDoc
> {
  readonly _joinActive: PopulateOptions[] = [
    // {
    //   path: 'category', // tên field trong ProductEntity
    //   model: 'CategoryEntity', // tên model tham chiếu
    // },
    // {
    //   path: 'brand',
    //   model: 'BrandEntity',
    // },
  ];
  constructor(
    @InjectDatabaseModel(ProductEntity.name)
    private readonly userModel: Model<ProductEntity>,
  ) {
    super(userModel);
  }
}
