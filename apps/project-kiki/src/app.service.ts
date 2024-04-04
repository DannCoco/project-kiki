import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('RATE_SERVICE') private clientRate: ClientProxy) {

  }

  reateCreate(rate: any) {
    this.clientRate.emit('rate', rate)
  }

  getAllRates() {
    
  }
}
