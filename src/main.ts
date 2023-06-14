import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('swagger 연습 문서 제목')
    .setDescription('swagger 연습을 위한 문서입니다.')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
