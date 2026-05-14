import { Module } from '@nestjs/common';
import { UserPublicController } from 'src/module/user/controllers/user.public.controller';
import { UserModule } from 'src/module/user/user.module';

@Module({
  controllers: [UserPublicController],
  imports: [UserModule],
})
export class RouterPublicModule {}
