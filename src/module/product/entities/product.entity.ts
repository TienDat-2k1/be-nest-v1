import { Schema } from '@nestjs/mongoose';
import { DatabaseEntityBase } from 'src/common/database/bases/database.entity.base';
import {
  DatabaseEntity,
  DatabaseProp,
  DatabaseSchema,
} from 'src/common/database/decorators/database.decorator';
import { IDatabaseDocument } from 'src/common/database/interfaces/database.interface';

@DatabaseEntity()
@Schema({ collection: 'products' })
export class ProductEntity extends DatabaseEntityBase {
  @DatabaseProp({
    required: true,
    index: true,
  })
  name: string;

  @DatabaseProp({})
  description: string;

  @DatabaseProp({
    type: Number || null,
  })
  discount: number | null;

  @DatabaseProp({})
  price: number;

  @DatabaseProp({})
  slug?: string;
  // likeUsers:
}

export const ProductSchema = DatabaseSchema(ProductEntity);
export type ProductDoc = IDatabaseDocument<ProductEntity>;
