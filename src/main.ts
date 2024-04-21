import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://portifolio-xi-paulo-roberto.vercel.app', 'https://portifolio-git-main-paulo-roberto-lopes-projects.vercel.app', 'portifolio-gebyqtk6m-paulo-roberto-lopes-projects.vercel.app', 'http://localhost:3333'],
    methods: 'GET, HEAD, PUT, POST, DELETE, OPTIONS, PATCH',
    credentials: true,
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Authentication, Access-control-allow-credentials, Access-control-allow-headers, Access-control-allow-methods, Access-control-allow-origin, User-Agent, Referer, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Cache-Control, Pragma',
  });

  await app.listen(3333);
}
bootstrap();
