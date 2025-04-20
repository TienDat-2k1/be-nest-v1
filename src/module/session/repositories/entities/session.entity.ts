import { DatabaseEntityBase } from 'src/common/database/bases/database.entity.base';
import {
  DatabaseEntity,
  DatabaseProp,
  DatabaseSchema,
} from 'src/common/database/decorators/database.decorator';
import { ENUM_SESSION_STATUS } from '../../enums/session.enum';
import { UserEntity } from 'src/module/user/entities/user.entity';
import { IDatabaseDocument } from 'src/common/database/interfaces/database.interface';

export const SessionTableName = 'Sessions';

@DatabaseEntity({ collection: SessionTableName })
export class SessionEntity extends DatabaseEntityBase {
  @DatabaseProp({
    required: true,
    index: true,
    type: String,
    enum: ENUM_SESSION_STATUS,
    default: ENUM_SESSION_STATUS.ACTIVE,
  })
  status: ENUM_SESSION_STATUS;

  @DatabaseProp({
    required: false,
    type: Date,
  })
  revokeAt?: Date;

  @DatabaseProp({
    required: true,
    index: true,
    trim: true,
    type: String,
    ref: UserEntity.name,
  })
  user: string;

  @DatabaseProp({
    required: true,
    type: Date,
  })
  expiredAt: Date;

  @DatabaseProp({
    required: true,
    trim: true,
    type: String,
  })
  ip: string;

  @DatabaseProp({
    required: true,
    trim: true,
    type: String,
  })
  hostname: string;

  @DatabaseProp({
    required: true,
    trim: true,
    type: String,
  })
  protocol: string;

  @DatabaseProp({
    required: true,
    trim: true,
    type: String,
  })
  originalUrl: string;

  @DatabaseProp({
    required: true,
    trim: true,
    type: String,
  })
  method: string;
}

export const SessionSchema = DatabaseSchema(SessionEntity);
export type SessionDoc = IDatabaseDocument<SessionEntity>;
