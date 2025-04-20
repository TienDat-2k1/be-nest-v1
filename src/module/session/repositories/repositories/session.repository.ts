import { Injectable } from '@nestjs/common';
import { DatabaseRepositoryBase } from 'src/common/database/bases/database.repository';
import { SessionDoc, SessionEntity } from '../entities/session.entity';
import { InjectDatabaseModel } from 'src/common/database/decorators/database.decorator';
import { Model } from 'mongoose';

@Injectable()
export class SessionRepository extends DatabaseRepositoryBase<
  SessionEntity,
  SessionDoc
> {
  constructor(
    @InjectDatabaseModel(SessionEntity.name)
    private readonly sessionModel: Model<SessionEntity>,
  ) {
    super(sessionModel);
  }
}
