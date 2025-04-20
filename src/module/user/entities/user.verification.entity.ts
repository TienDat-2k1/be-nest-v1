import {
  DatabaseProp,
  DatabaseSchema,
} from 'src/common/database/decorators/database.decorator';
import { IDatabaseDocument } from 'src/common/database/interfaces/database.interface';

export class UserVerificationEntity {
  @DatabaseProp({
    required: true,
    index: true,
    default: false,
  })
  email: boolean;

  @DatabaseProp({ required: false })
  emailVerificationDate?: Date;

  @DatabaseProp({
    required: true,
    index: true,
    default: false,
  })
  phoneNumber: boolean;

  @DatabaseProp({ required: false })
  phoneNumberVerificationDate?: Date;
}

export const UserVerificationSchema = DatabaseSchema(UserVerificationEntity);
export type userVerificationDocs = IDatabaseDocument<UserVerificationEntity>;
