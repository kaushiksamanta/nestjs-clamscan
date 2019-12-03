export interface ClamScanOptions {
    host: string;
    port: number;
}

export interface ClamScanDirectoryOptions{
    timeout: number;
    chunkSize: number;
    scanningFile: number;
    detail: boolean;
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