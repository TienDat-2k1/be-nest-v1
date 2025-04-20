import { v4 as uuid } from 'uuid';
import { DatabaseProp } from '../decorators/database.decorator';

export class DatabaseEntityBase {
  @DatabaseProp({ type: String, default: uuid })
  _id: string;

  @DatabaseProp({ type: Boolean, index: true, default: false })
  deleted: boolean;

  @DatabaseProp({
    required: false,
    index: 'asc',
    type: Date,
    default: new Date(),
  })
  createdAt?: Date;

  @DatabaseProp({
    required: false,
    index: 'asc',
    type: Date,
    default: new Date(),
  })
  updatedAt?: Date;

  @DatabaseProp({
    required: false,
    index: true,
  })
  updatedBy?: string;

  @DatabaseProp({
    required: false,
    index: true,
    type: Date,
  })
  deletedAt?: Date;

  @DatabaseProp({
    required: false,
    index: true,
  })
  deletedBy?: string;
}
