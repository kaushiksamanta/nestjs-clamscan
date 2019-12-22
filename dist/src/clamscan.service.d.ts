import { ClamScanOptions, ClamScanDirectoryResult, ClamScanDirectoryOptions } from './clamscan.interface';
export declare class ClamScanService {
    private scanner;
    private options;
    constructor(options: ClamScanOptions);
    /**
     * Scan stream
     * @param stream read stream object
     * @param timeout use to set the socket's timeout option, default 3000
     */
    scanStream(stream: Object, timeout?: number): Promise<boolean>;
    /**
     * Scan buffer
     * @param buffer Object
     * @param timeout use to set the socket's timeout option, default 3000
     * @param chunkSize size of the chunk, which will send to ClamAV server, default 64 * 1024
     */
    scanBuffer(buffer: Object, timeout?: number, chunkSize?: number): Promise<boolean>;
    /**
     * Scan file
     * @param path  file path, will be pass to path.normalize() first
     * @param timeout use to set the socket's timeout option, default 3000
     * @param chunkSize size of the chunk, which will send to ClamAV server, default 64 * 1024
     */
    scanFile(path: string, timeout?: number, chunkSize?: number): Promise<boolean>;
    /**
     * Scan directory
     * @param rootPath Directory path, will be pass to path.normalize() first
     * @param options ClamScan Directory Options
     */
    scanDirectory(rootPath: string, options: ClamScanDirectoryOptions): Promise<ClamScanDirectoryResult>;
    /**
     * Get version
     * @param timeout use to set the socket's timeout option, default 1000
     */
    version(timeout?: number): Promise<string>;
    /**
     * Ping
     * @param timeout use to set the socket's timeout option, default 1000
     */
    ping(timeout?: number): Promise<boolean>;
}
