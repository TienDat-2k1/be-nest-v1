import { Injectable } from '@nestjs/common';
import { DatabaseRepositoryBase } from 'src/common/database/bases/database.repository';
import { UserDoc, UserEntity } from '../../entities/user.entity';
import { Model, PopulateOptions } from 'mongoose';
import { InjectDatabaseModel } from 'src/common/database/decorators/database.decorator';

@Injectable()
export class UserRepository extends DatabaseRepositoryBase<
  UserEntity,
  UserDoc
> {
  readonly _joinActive: PopulateOptions[] = [];
  constructor(
    @InjectDatabaseModel(UserEntity.name)
    private readonly userModel: Model<UserEntity>,
  ) {
    super(userModel);
  }
}
