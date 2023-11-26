import { join } from 'path';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestMicroservice } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

import { ProtobufPackage } from './users/users.pb';

async function bootstrap() {
  const app: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50051',
        package: ProtobufPackage,
        protoPath: join('../../done-nest-proto/proto/users.proto'),
      },
    },
  );

  await app.listen();
}

bootstrap();
