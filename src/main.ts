import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));
  
  app.enableCors({
    origin: ['http://localhost:3000', 'https://stock-management-api-ten.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  });
  
  // Untuk Vercel, port akan diatur otomatis
  const port = process.env.PORT || 3000;
  await app.listen(port);
}

// Export untuk Vercel
export default bootstrap;

// Untuk development
if (require.main === module) {
  bootstrap();
}