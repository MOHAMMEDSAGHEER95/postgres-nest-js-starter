import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DvsController } from './dvs.controller';
import { UserDVS } from './dvs.entity';
import { DvsService } from './dvs.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDVS])],
  controllers: [DvsController],
  providers: [DvsService],
  exports: [TypeOrmModule]
})
export class DvsModule {}
