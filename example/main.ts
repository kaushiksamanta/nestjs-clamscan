import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });
  await app.listen(3000, () => {
    console.log('Listening on port ' + 3000);
  });
}

bootstrap();
