import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';
import { AllConfigType } from 'src/configs/config.type';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  private readonly logger = new Logger(MongooseConfigService.name);

  constructor(private configService: ConfigService<AllConfigType>) {
    this.logger.debug('MongooseConfigService initialized');
  }

  createMongooseOptions():
    | Promise<MongooseModuleOptions>
    | MongooseModuleOptions {
    return {
      uri: this.configService.get('database.url', { infer: true }),
      dbName: this.configService.get('database.name', { infer: true }),
      // user: this.configService.get('database.username', { infer: true }),
      // pass: this.configService.get('database.password', { infer: true }),

      connectionFactory: (connection: Connection): Connection => {
        console.log(
          `connect to: ${connection.host} :${connection.port}/${connection.name}`,
        );

        return connection;
      },
    };
  }
}
