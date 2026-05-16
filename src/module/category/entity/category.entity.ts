import { Schema } from '@nestjs/mongoose';
import { DatabaseEntityBase } from 'src/common/database/bases/database.entity.base';
import {
  DatabaseEntity,
  DatabaseProp,
  DatabaseSchema,
} from 'src/common/database/decorators/database.decorator';
import { IDatabaseDocument } from 'src/common/database/interfaces/database.interface';

@DatabaseEntity()
@Schema({ collection: 'categories' })
export class CategoryEntity extends DatabaseEntityBase {
  @DatabaseProp()
  name: string;
}

export const CategorySchema = DatabaseSchema(CategoryEntity);
export type CategoryDoc = IDatabaseDocument<CategoryEntity>;
