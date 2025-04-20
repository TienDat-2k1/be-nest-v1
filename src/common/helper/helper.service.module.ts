import { DynamicModule, Global, Module } from '@nestjs/common';
import { HelperStringService } from './services/helper.string.service';
import { HelperHashService } from './services/helper.hash.service';
import { HelperDateService } from './services/helper.date.service';

@Global()
@Module({})
export class HelperModule {
  static forRoot(): DynamicModule {
    return {
      module: HelperModule,
      providers: [HelperStringService, HelperHashService, HelperDateService],
      exports: [HelperStringService, HelperHashService, HelperDateService],
      controllers: [],
      imports: [],
    };
  }
}
