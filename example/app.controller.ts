import { Controller, Get } from '@nestjs/common';
import { ClamScanService, ClamScanDirectoryResult } from '../src';

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

  @Get('/scan-infected')
  async scanInfected(): Promise<boolean> {
    return this.clamScanService.scanFile(__dirname + '/files/test.virus.txt');
  }

  @Get('/scan-safe')
  async scanSafe(): Promise<boolean> {
    return this.clamScanService.scanFile(__dirname + '/files/test.safe.txt');
  }

  @Get('/scan-directory')
  async scanDirectory(): Promise<ClamScanDirectoryResult> {
    return this.clamScanService.scanDirectory(__dirname + '/files', {
      timeout: 5000,
      chunkSize: 64 * 1024,
      scanningFile: 10,
      detail: true,
      cont: true
    });
  }
}
