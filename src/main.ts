import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception-filter';
import { LoggingInterceptor } from './logger.interceptor';
import { AuthGuard } from './auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// app.useGlobalInterceptors(new LoggingInterceptor());
// app.useGlobalFilters(new HttpExceptionFilter());
// app.useGlobalPipes(new ValidationPipe());
// app.useGlobalGuards(new AuthGuard());
