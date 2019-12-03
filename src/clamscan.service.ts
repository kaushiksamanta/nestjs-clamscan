import { Injectable } from '@nestjs/common';
import { ClamScanOptions, ClamScanDirectoryResult, ClamScanDirectoryOptions } from './clamscan.interface';
import * as clamd from 'clamdjs';

@Injectable()
export class ClamScanService {
    private scanner: any;
    private options: ClamScanOptions;

    constructor(options: ClamScanOptions) {
        this.options = options;
        this.scanner = clamd.createScanner(options.host, options.port);
    }

    public scanStream(stream: Object, timeout: number = 3000): Promise<string> {
        return this.scanner.scanStream(stream, timeout);
    }

    public scanBuffer(buffer: Object, timeout: number = 3000, chunkSize: number = 1024 * 1024): Promise<string> {
        return this.scanner.scanBuffer(buffer, timeout, chunkSize);
    }

    public scanFile(path: string, timeout: number = 3000, chunkSize: number = 1024 * 1024): Promise<string> {
        return this.scanner.scanFile(path, timeout, chunkSize);
    }

    public scanDirectory(path: string, options: ClamScanDirectoryOptions): Promise<ClamScanDirectoryResult> {
        return this.scanner.scanDirectory(path, options);
    }

    public version(timeout: number = 1000): Promise<string> {
        return clamd.version(this.options.host, this.options.port, timeout);
    }
}