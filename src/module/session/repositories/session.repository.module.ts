import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionEntity, SessionSchema } from './entities/session.entity';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constant/database.constant';
import { SessionRepository } from './repositories/session.repository';

@Module({
  controllers: [],
  imports: [
    MongooseModule.forFeature(
      [{ name: SessionEntity.name, schema: SessionSchema }],
      DATABASE_CONNECTION_NAME,
    ),
  ],
  exports: [SessionRepository],
  providers: [SessionRepository],
})
export class SessionRepositoryModule {}
