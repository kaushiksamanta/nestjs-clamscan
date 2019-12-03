import { ClamScanService } from '../src';
export declare class AppController {
    private readonly clamScanService;
    constructor(clamScanService: ClamScanService);
    getVersion(): Promise<string>;
}
