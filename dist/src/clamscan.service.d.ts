import { ClamScanOptions } from './clamscan.interface';
export declare class ClamScanService {
    private instance;
    private options;
    constructor(options: ClamScanOptions);
    scanStream(stream: Object, timeout?: number): Promise<string>;
    scanBuffer(buffer: Object, timeout?: number, chunkSize?: number): Promise<string>;
    scanFile(path: string, timeout?: number, chunkSize?: number): Promise<string>;
    version(timeout?: number): Promise<string>;
}
