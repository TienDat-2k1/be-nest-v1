import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { RouterModule } from './router/router.module';

@Module({
  imports: [CommonModule, RouterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
