import { Test, TestingModule } from '@nestjs/testing';
import { DogsService } from './dogs.service';

describe('DogsService', () => {
  let provider: DogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogsService],
    }).compile();

    provider = module.get<DogsService>(DogsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
