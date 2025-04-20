import { Module } from '@nestjs/common';
import { SessionService } from './services/session.service';
import { SessionRepositoryModule } from './repositories/session.repository.module';
import { BullModule } from '@nestjs/bullmq';
import { ENUM_WORKER_QUEUE } from 'src/worker/enums/worker.enum';

@Module({
  imports: [
    SessionRepositoryModule,
    BullModule.registerQueueAsync({ name: ENUM_WORKER_QUEUE.SESSION_QUEUE }),
  ],
  controllers: [],
  providers: [SessionService],
  exports: [SessionService],
})
export class SessionModule {}
