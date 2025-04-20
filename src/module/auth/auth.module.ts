import { DynamicModule, Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';

@Module({
  controllers: [],
  providers: [AuthService],
  imports: [],
  exports: [AuthService],
})
export class AuthModule {
  static forRoot(): DynamicModule {
    return {
      module: AuthModule,
      providers: [],
      exports: [],
      controllers: [],
      imports: [],
    };
  }
}
