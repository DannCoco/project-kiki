import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Rate } from './interfaces/rate.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private rates: Rate[] = [];

  private calculate(distance: number): number {
    const base = 10; // Base rate
    const costKilometer = 2; // Additional cost kilometer
    return base + (costKilometer * distance);
  }

  @Post()
  createRate(@Body() rate: Rate) {
    var distance = rate.distancia;

    rate.tarifa = this.calculate(distance);
    this.rates.push(rate);

    return this.appService.reateCreate(rate);
  }

  @Get()
  getAllRates() {
    return this.appService.getAllRates();
  }
}
