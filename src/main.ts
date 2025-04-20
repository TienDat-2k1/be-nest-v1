import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from './configs/config.type';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const configService = app.get(ConfigService<AllConfigType>);

  await app.listen(configService.getOrThrow('app.port', { infer: true }));
}

void bootstrap();
