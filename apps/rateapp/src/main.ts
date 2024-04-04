import { NestFactory } from '@nestjs/core';
import { RateappModule } from './rateapp.module';

async function bootstrap() {
  const app = await NestFactory.create(RateappModule);
  await app.listen(3000);
}
bootstrap();
