import { Module } from '@nestjs/common';
import { RateappController } from './rateapp.controller';
import { RateappService } from './rateapp.service';

@Module({
  imports: [],
  controllers: [RateappController],
  providers: [RateappService],
})
export class RateappModule {}
