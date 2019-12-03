"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ClamscanModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const clamscan_service_1 = require("./clamscan.service");
let ClamscanModule = ClamscanModule_1 = class ClamscanModule {
    static forRoot(options) {
        return {
            module: ClamscanModule_1,
            providers: [{
                    provide: clamscan_service_1.ClamScanService,
                    useValue: new clamscan_service_1.ClamScanService(options)
                }],
            exports: [clamscan_service_1.ClamScanService],
        };
    }
};
ClamscanModule = ClamscanModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], ClamscanModule);
exports.ClamscanModule = ClamscanModule;
//# sourceMappingURL=clamscan.module.js.map