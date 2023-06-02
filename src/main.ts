import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { Server } from 'socket.io';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const server = app.getHttpServer();
  const socketio = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
    allowEIO3: false,
  });
  await app.listen(3000);
}
bootstrap();
