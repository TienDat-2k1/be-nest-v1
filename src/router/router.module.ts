import { Module } from '@nestjs/common';
import { RouterModule as NestRouterModule } from '@nestjs/core';
import { RouterUserModule } from './routers/routers.user.module';
import { RoutersAdminModule } from './routers/routers.admin.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    RouterUserModule,
    RoutersAdminModule,
    NestRouterModule.register([
      { path: '/user', module: RouterUserModule },
      {
        path: '/admin',
        module: RoutersAdminModule,
      },
    ]),
  ],
  exports: [],
})
export class RouterModule {}
