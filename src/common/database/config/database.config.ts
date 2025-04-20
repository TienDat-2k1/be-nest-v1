import { registerAs } from '@nestjs/config';
import { DatabaseConfig } from './database-config.type';
import validateConfig from 'src/utils/validate-config';
import { IsString, ValidateIf } from 'class-validator';

class EnvironmentVariablesValidation {
  @ValidateIf((envValues) => envValues.DATABASE_URL)
  @IsString()
  DATABASE_URL: string;

  @ValidateIf((envValues) => !envValues.DATABASE_URL)
  @IsString()
  DATABASE_NAME: string;

  @ValidateIf((envValues) => !envValues.DATABASE_URL)
  @IsString()
  DATABASE_USERNAME: string;

  @ValidateIf((envValues) => !envValues.DATABASE_URL)
  @IsString()
  DATABASE_PASSWORD: string;
}

export default registerAs<DatabaseConfig>('database', () => {
  validateConfig(process.env, EnvironmentVariablesValidation);

  return {
    isDocumentDatabase: ['mongodb'].includes(process.env.DATABASE_TYPE ?? ''),
    url: process.env.DATABASE_URL,
    // type: process.env.DATABASE_TYPE,
    // host: process.env.DATABASE_TYPE,
    // port: process.env.DATABASE_TYPE,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
    // username: process.env.DATABASE_USERNAME,
    // synchronize: process.env.DATABASE_TYPE,
    // maxConnections: process.env.DATABASE_TYPE,
    // sslEnabled: process.env.DATABASE_TYPE,
    // rejectUnauthorized: process.env.DATABASE_TYPE,
    // ca: process.env.DATABASE_TYPE,
    // key: process.env.DATABASE_TYPE,
    // cert: process.env.DATABASE_TYPE,
  };
});
