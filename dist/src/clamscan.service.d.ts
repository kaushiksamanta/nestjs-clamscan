import { ClamScanOptions, ClamScanDirectoryResult, ClamScanDirectoryOptions } from './clamscan.interface';
export declare class ClamScanService {
    private scanner;
    private options;
    constructor(options: ClamScanOptions);
    scanStream(stream: Object, timeout?: number): Promise<string>;
    scanBuffer(buffer: Object, timeout?: number, chunkSize?: number): Promise<string>;
    scanFile(path: string, timeout?: number, chunkSize?: number): Promise<string>;
    scanDirectory(path: string, options: ClamScanDirectoryOptions): Promise<ClamScanDirectoryResult>;
    version(timeout?: number): Promise<string>;
}
