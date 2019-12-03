import { ClamScanService } from '../src';
export declare class AppController {
    private readonly clamScanService;
    constructor(clamScanService: ClamScanService);
    getVersion(): Promise<string>;
    scanInfected(): Promise<string>;
    scanSafe(): Promise<string>;
    scanDirectory(): Promise<import("../src").ClamScanDirectoryResult>;
}
