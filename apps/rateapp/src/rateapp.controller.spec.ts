import { Test, TestingModule } from '@nestjs/testing';
import { RateappController } from './rateapp.controller';
import { RateappService } from './rateapp.service';

describe('RateappController', () => {
  let rateappController: RateappController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RateappController],
      providers: [RateappService],
    }).compile();

    rateappController = app.get<RateappController>(RateappController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rateappController.getHello()).toBe('Hello World!');
    });
  });
});
