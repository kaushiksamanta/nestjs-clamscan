export interface ClamScanOptions {
    host: string;
    port: number;
}

export interface ClamScanDirectoryOptions{
    // use to set the socket's timeout option, default 5000
    timeout: number;
    // size of the chunk, which will send to ClamAV server, default 64 * 1024
    chunkSize: number;
    // the number of file will scan concurrently, should not be greater than the file table limit in node.js, default 10
    scanningFile: number;
    // if true the output object will contain the scan summary and all scaned files's scan result no matter infected or not, if false the output object will contain the scan summary and scan result of infected files and file that encountered error when scanning, default true
    detail: boolean;
    // when scanning a path and an Error throw, if true, will move on to scan next path, if false, will stop scanning and return a rejected promise, default true
    cont: boolean;
}

export interface ClamScanDirectoryResult {
    ScannedFiles: number;
    Infected: number;
    EncounterError: number;
    Result: FileDetail[];
}

export interface FileDetail {
    file: string,
    reply: string,
    errorMsg: string
}