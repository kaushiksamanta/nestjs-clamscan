import { DynamicModule } from '@nestjs/common';
import { ClamScanOptions } from './clamscan.interface';
export declare class ClamscanModule {
    static forRoot(options: ClamScanOptions): DynamicModule;
}
