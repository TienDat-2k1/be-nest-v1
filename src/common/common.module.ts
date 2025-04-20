import { Module } from '@nestjs/common';
import {
  DatabaseModule,
  DatabaseOptionModule,
} from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import configs from 'src/configs';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './database/service/mongoose-config.service';
import { DATABASE_CONNECTION_NAME } from './database/constant/database.constant';
import { HelperModule } from './helper/helper.service.module';
import { AuthModule } from 'src/module/auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({ load: configs, isGlobal: true }),
    MongooseModule.forRootAsync({
      connectionName: DATABASE_CONNECTION_NAME,
      imports: [DatabaseOptionModule],
      inject: [MongooseConfigService],
      useFactory: (databaseService: MongooseConfigService) => {
        return databaseService.createMongooseOptions();
      },
    }),

    DatabaseModule.forRoot(),
    AuthModule.forRoot(),
    HelperModule.forRoot(),
  ],
})
export class CommonModule {}
