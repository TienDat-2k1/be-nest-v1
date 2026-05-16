import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductRepositoryModule } from './repositories/product.repository.module';

@Module({
  controllers: [],
  imports: [ProductRepositoryModule],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
