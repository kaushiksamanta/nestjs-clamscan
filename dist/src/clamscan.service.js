"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const clamd = require("clamdjs");
let ClamScanService = class ClamScanService {
    constructor(options) {
        this.options = options;
        this.scanner = clamd.createScanner(options.host, options.port);
    }
    /**
     * Scan stream
     * @param stream read stream object
     * @param timeout use to set the socket's timeout option, default 3000
     */
    async scanStream(stream, timeout = 3000) {
        const result = await this.scanner.scanStream(stream, timeout);
        return clamd.isCleanReply(result);
    }
    /**
     * Scan buffer
     * @param buffer Object
     * @param timeout use to set the socket's timeout option, default 3000
     * @param chunkSize size of the chunk, which will send to ClamAV server, default 64 * 1024
     */
    async scanBuffer(buffer, timeout = 3000, chunkSize = 1024 * 1024) {
        const result = await this.scanner.scanBuffer(buffer, timeout, chunkSize);
        return clamd.isCleanReply(result);
    }
    /**
     * Scan file
     * @param path  file path, will be pass to path.normalize() first
     * @param timeout use to set the socket's timeout option, default 3000
     * @param chunkSize size of the chunk, which will send to ClamAV server, default 64 * 1024
     */
    async scanFile(path, timeout = 3000, chunkSize = 1024 * 1024) {
        const result = await this.scanner.scanFile(path, timeout, chunkSize);
        return clamd.isCleanReply(result);
    }
    /**
     * Scan directory
     * @param rootPath Directory path, will be pass to path.normalize() first
     * @param options ClamScan Directory Options
     */
    scanDirectory(rootPath, options) {
        return this.scanner.scanDirectory(rootPath, options);
    }
    /**
     * Get version
     * @param timeout use to set the socket's timeout option, default 1000
     */
    version(timeout = 1000) {
        return clamd.version(this.options.host, this.options.port, timeout);
    }
    /**
     * Ping
     * @param timeout use to set the socket's timeout option, default 1000
     */
    ping(timeout = 1000) {
        return clamd.ping(this.options.host, this.options.port, timeout);
    }
};
ClamScanService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], ClamScanService);
exports.ClamScanService = ClamScanService;
//# sourceMappingURL=clamscan.service.js.map