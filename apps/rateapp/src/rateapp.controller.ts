import { Controller, Get } from '@nestjs/common';
import { RateappService } from './rateapp.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class RateappController {
  constructor(private readonly rateappService: RateappService) {}

  @EventPattern('rate')
  handleRate(data: any) {
    return data;
  }
}
