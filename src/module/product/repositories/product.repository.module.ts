import { Module } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductEntity, ProductSchema } from '../entities/product.entity';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constant/database.constant';

@Module({
  controllers: [],
  imports: [
    MongooseModule.forFeature(
      [{ name: ProductEntity.name, schema: ProductSchema }],
      DATABASE_CONNECTION_NAME,
    ),
  ],
  providers: [ProductRepository],
  exports: [ProductRepository],
})
export class ProductRepositoryModule {}
