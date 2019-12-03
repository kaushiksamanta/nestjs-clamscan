import { Controller, Get } from '@nestjs/common';
import { ClamScanService } from '../src';

@Controller()
export class AppController {
  constructor(
    private readonly clamScanService: ClamScanService
  ) {
  }

  @Get()
  getVersion(): Promise<string> {
    return this.clamScanService.version();
  }


}
