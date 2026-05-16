import { Body, Controller, Patch, Post } from '@nestjs/common';
import { Connection } from 'mongoose';
import { InjectDatabaseConnection } from 'src/common/database/decorators/database.decorator';
import { ProductService } from './product.service';
import { ProductCreateDTO } from './dtos/product.create.request.dto';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(@Body() data: ProductCreateDTO) {
    return this.productService.create(data);
  }

  @Patch()
  async updateProduct() {}

  @Patch()
  async deleteProduct() {}
}
