import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, UserSchema } from '../entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constant/database.constant';

@Module({
  controllers: [],
  providers: [UserRepository],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: UserEntity.name,
          schema: UserSchema,
        },
      ],
      DATABASE_CONNECTION_NAME,
    ),
  ],
  exports: [UserRepository],
})
export class UserRepositoryModule {}
