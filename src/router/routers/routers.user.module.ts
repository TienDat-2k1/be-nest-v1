import { Module } from '@nestjs/common';
import { AuthModule } from 'src/module/auth/auth.module';
import { AuthPublicController } from 'src/module/auth/controllers/auth.public.controller';
import { SessionModule } from 'src/module/session/session.module';
import { UserUserController } from 'src/module/user/controllers/user.user.controller';
import { UserModule } from 'src/module/user/user.module';

@Module({
  controllers: [UserUserController, AuthPublicController],
  providers: [],
  exports: [],
  imports: [UserModule, AuthModule, SessionModule],
})
export class RouterUserModule {}
