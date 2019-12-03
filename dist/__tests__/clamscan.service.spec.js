"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const clamscan_service_1 = require("../src/clamscan.service");
describe('ClamscanService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [clamscan_service_1.ClamScanService],
        }).compile();
        service = module.get(clamscan_service_1.ClamScanService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=clamscan.service.spec.js.map