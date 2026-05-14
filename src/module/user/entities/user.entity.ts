import { DatabaseEntityBase } from 'src/common/database/bases/database.entity.base';
import { IDatabaseDocument } from 'src/common/database/interfaces/database.interface';
import {
  DatabaseEntity,
  DatabaseProp,
  DatabaseSchema,
} from 'src/common/database/decorators/database.decorator';

import { ENUM_USER_GENDER, ENUM_USER_STATUS } from '../enums/user.enum';
import {
  UserVerificationEntity,
  UserVerificationSchema,
} from './user.verification.entity';

@DatabaseEntity({ collection: 'Users' })
export class UserEntity extends DatabaseEntityBase {
  @DatabaseProp({
    required: true,
    index: true,
    trim: true,
    type: String,
    maxlength: 100,
  })
  name: string;

  @DatabaseProp({
    required: true,
    index: true,
    trim: true,
    type: String,
    maxlength: 50,
    minlength: 3,
    unique: true,
  })
  username: string;

  // phoneNumber: string;

  @DatabaseProp({
    required: true,
    unique: true,
    index: true,
    trim: true,
    type: String,
    maxlength: 100,
  })
  email: string;

  // // @DatabaseProp({
  // //   required: true,
  // //   index: true,
  // //   trim: true,
  // // })
  // // role: string;

  @DatabaseProp({
    required: true,
    schema: UserVerificationSchema,
  })
  verification: UserVerificationEntity;

  @DatabaseProp({
    required: true,
    type: String,
    trim: true,
  })
  password: string;

  @DatabaseProp({
    required: true,
    type: Date,
  })
  passwordExpired: Date;

  @DatabaseProp({
    required: true,
    type: Date,
  })
  passwordCreated: Date;

  // signUpDate: Date;

  @DatabaseProp({
    required: true,
    type: String,
  })
  salt: string;

  @DatabaseProp({
    required: true,
    default: ENUM_USER_STATUS.ACTIVE,
    index: true,
    type: String,
    enum: ENUM_USER_STATUS,
  })
  status: ENUM_USER_STATUS.ACTIVE;
  // photo?:
  @DatabaseProp({
    index: true,
    type: String,
    enum: ENUM_USER_GENDER,
  })
  gender?: ENUM_USER_GENDER;
  // country?:

  @DatabaseProp({
    type: String,
    maxlength: 200,
    trim: true,
  })
  address?: string;
}

export const UserSchema = DatabaseSchema(UserEntity);
export type UserDoc = IDatabaseDocument<UserEntity>;
