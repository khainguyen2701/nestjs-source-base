import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './logger/my.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});

  app.useLogger(new MyLogger());

  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  console.error('Bootstrap failed:', err);
  process.exit(1);
});
