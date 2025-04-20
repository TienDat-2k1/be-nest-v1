import { DynamicModule, Global, Module } from '@nestjs/common';
import { MongooseConfigService } from './service/mongoose-config.service';

@Module({
  providers: [MongooseConfigService],
  exports: [MongooseConfigService],
  imports: [],
  controllers: [],
})
export class DatabaseOptionModule {}

@Global()
@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [],
    };
  }
}
