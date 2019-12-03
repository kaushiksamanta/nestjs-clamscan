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
const src_1 = require("../src");
let AppController = class AppController {
    constructor(clamScanService) {
        this.clamScanService = clamScanService;
    }
    getVersion() {
        return this.clamScanService.version();
    }
    async scanInfected() {
        return this.clamScanService.scanFile(__dirname + '/files/test.virus.txt');
    }
    async scanSafe() {
        return this.clamScanService.scanFile(__dirname + '/files/test.safe.txt');
    }
    async scanDirectory() {
        return this.clamScanService.scanDirectory(__dirname + '/files', {
            timeout: 5000,
            chunkSize: 64 * 1024,
            scanningFile: 10,
            detail: true,
            cont: true
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getVersion", null);
__decorate([
    common_1.Get('/scan-infected'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "scanInfected", null);
__decorate([
    common_1.Get('/scan-safe'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "scanSafe", null);
__decorate([
    common_1.Get('/scan-directory'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "scanDirectory", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [src_1.ClamScanService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map