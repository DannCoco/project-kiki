import { Injectable } from '@nestjs/common';

@Injectable()
export class RateappService {
  getHello(): string {
    return 'Hello World!';
  }
}
