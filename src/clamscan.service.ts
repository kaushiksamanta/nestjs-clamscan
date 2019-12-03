import { Injectable } from '@nestjs/common';
import { ClamScanOptions } from './clamscan.interface';
import * as clamd from 'clamdjs';

@Injectable()
export class ClamScanService {
    private instance: any;
    private options: ClamScanOptions;

    constructor(options: ClamScanOptions) {
        this.options = options;
        this.instance = clamd.createScanner(options.host, options.port);
    }

    public scanStream(stream: Object, timeout: number): Promise<String> {
        return this.instance.scanStream(stream, timeout);
    }

    public scanBuffer(buffer: Object, timeout: number, chunkSize: number): Promise<String> {
        return this.instance.scanBuffer(buffer, timeout, chunkSize);
    }

    public scanFile(path: String, timeout: number, chunkSize: number): Promise<String> {
        return this.instance.scanFile(path, timeout, chunkSize);
    }

    public version(timeout: number): Promise<String> {
        return this.instance.version(this.options.host, this.options.port, timeout);
    }
}
