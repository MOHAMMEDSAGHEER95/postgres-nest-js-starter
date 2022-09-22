import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/user.entity';
import { ConfigModule } from '@nestjs/config'
import { DvsModule } from './dvs/dvs.module';
import { UserDVS } from './dvs/dvs.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'nestjs',
    username: 'docker',
    password: 'docker',
    entities: [User, UserDVS],
    synchronize: true
  }), UserModule,
  ConfigModule.forRoot(),
  DvsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
