import { Module } from '@nestjs/common';
import { AuthModule } from 'src/module/auth/auth.module';
import { AuthAdminController } from 'src/module/auth/controllers/auth.admin.controller';
import { SessionModule } from 'src/module/session/session.module';
import { UserAdminController } from 'src/module/user/controllers/user.admin.controller';
import { UserModule } from 'src/module/user/user.module';

@Module({
  controllers: [UserAdminController, AuthAdminController],
  exports: [],
  imports: [UserModule, AuthModule, SessionModule],
  providers: [],
})
export class RoutersAdminModule {}
