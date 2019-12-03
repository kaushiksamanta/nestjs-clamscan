import { Injectable } from '@nestjs/common';
import { ClamScanService } from '../src';

@Injectable()
export class AppService {
  constructor(
    private readonly clamScanService: ClamScanService
  ) {}
}
