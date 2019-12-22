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

    /**
     * Scan stream
     * @param stream read stream object
     * @param timeout use to set the socket's timeout option, default 3000
     */
    public async scanStream(stream: Object, timeout: number = 3000): Promise<boolean> {
        const result = await this.scanner.scanStream(stream, timeout);
        return clamd.isCleanReply(result);
    }

    /**
     * Scan buffer
     * @param buffer Object
     * @param timeout use to set the socket's timeout option, default 3000
     * @param chunkSize size of the chunk, which will send to ClamAV server, default 64 * 1024
     */
    public async scanBuffer(buffer: Object, timeout: number = 3000, chunkSize: number = 1024 * 1024): Promise<boolean> {
        const result = await this.scanner.scanBuffer(buffer, timeout, chunkSize);
        return clamd.isCleanReply(result);
    }

    /**
     * Scan file
     * @param path  file path, will be pass to path.normalize() first
     * @param timeout use to set the socket's timeout option, default 3000
     * @param chunkSize size of the chunk, which will send to ClamAV server, default 64 * 1024
     */
    public async scanFile(path: string, timeout: number = 3000, chunkSize: number = 1024 * 1024): Promise<boolean> {
        const result = await this.scanner.scanFile(path, timeout, chunkSize);
        return clamd.isCleanReply(result);
    }

    /**
     * Scan directory
     * @param rootPath Directory path, will be pass to path.normalize() first
     * @param options ClamScan Directory Options
     */
    public scanDirectory(rootPath: string, options: ClamScanDirectoryOptions): Promise<ClamScanDirectoryResult> {
        return this.scanner.scanDirectory(rootPath, options);
    }

    /**
     * Get version
     * @param timeout use to set the socket's timeout option, default 1000
     */
    public version(timeout: number = 1000): Promise<string> {
        return clamd.version(this.options.host, this.options.port, timeout);
    }

    /**
     * Ping
     * @param timeout use to set the socket's timeout option, default 1000
     */
    public ping(timeout: number = 1000): Promise<boolean> {
        return clamd.ping(this.options.host, this.options.port, timeout);
    }
}