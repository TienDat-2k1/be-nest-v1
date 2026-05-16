import { Injectable } from '@nestjs/common';
import { ProductCreateDTO } from './dtos/product.create.request.dto';
import { ProductRepository } from './repositories/product.repository';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly productRepo: ProductRepository) {}

  create(createProductDTO: ProductCreateDTO) {
    const product: ProductEntity = new ProductEntity();
    product.name = createProductDTO.name;
    product.description = createProductDTO.description;
    product.price = createProductDTO.price;
    product.slug = createProductDTO.slug;

    return this.productRepo.create(product);
  }
  update() {}
  delete() {}
}
