import { Module } from '@nestjs/common';
import { RouterModule as NestRouterModule } from '@nestjs/core';
import { RouterUserModule } from './routers/routers.user.module';
import { RoutersAdminModule } from './routers/routers.admin.module';
import { RouterPublicModule } from './routers/routers.public.module';
import { RouterProduct } from './routers/routers.product.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    RouterUserModule,
    RoutersAdminModule,
    RouterPublicModule,
    RouterProduct,
    NestRouterModule.register([
      { path: '/public', module: RouterPublicModule },
      { path: '/user', module: RouterUserModule },
      { path: 'product', module: RouterProduct },
      {
        path: '/admin',
        module: RoutersAdminModule,
      },
    ]),
  ],
  exports: [],
})
export class RouterModule {}
