import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Scan&Cook Source API')
    .setDescription('The Scan&Cook Source API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000).then(() => {
    console.log(
      `Application is running on: Swagger UI: http://localhost:3000/api`,
    );
  });
}
bootstrap();
