import { Test, TestingModule } from '@nestjs/testing';
import { ClamScanService } from '../src/clamscan.service';

describe('ClamscanService', () => {
  let service: ClamScanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClamScanService],
    }).compile();

    service = module.get<ClamScanService>(ClamScanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
