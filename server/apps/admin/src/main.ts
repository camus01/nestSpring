import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);//范型
  app.enableCors()
  app.useStaticAssets('uploads', {
    prefix: '/uploads'
  })

  const options = new DocumentBuilder()
    .setTitle('知识服务平台-后台管理API')
    .setDescription('供后台管理界面调用的服务端')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api_docs', app, document);
  
  await app.listen(3000);
  console.log("http://localhost:3000/api_docs")
}

bootstrap();
