import { ClamScanService } from '../src';
export declare class AppController {
    private readonly clamScanService;
    constructor(clamScanService: ClamScanService);
    getVersion(): Promise<string>;
    scanInfected(): Promise<boolean>;
    scanSafe(): Promise<boolean>;
    scanDirectory(): Promise<import("../src").ClamScanDirectoryResult>;
}
