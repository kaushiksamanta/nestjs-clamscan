import { Module, DynamicModule, Global } from '@nestjs/common';
import { ClamScanService } from './clamscan.service';
import { ClamScanOptions } from './clamscan.interface';

@Global()
@Module({})
export class ClamscanModule {
  static forRoot(options: ClamScanOptions): DynamicModule {
    return {
      module: ClamscanModule,
      providers: [{
        provide: ClamScanService,
        useValue: new ClamScanService(options)
      }],
      exports: [ClamScanService],
    };
  }
}
