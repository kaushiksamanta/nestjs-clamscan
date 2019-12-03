import { Controller, Get } from "@nestjs/common";
import { ClamScanService } from "src";

@Controller()
export class AppController {
  constructor(
    private readonly clamScanService: ClamScanService
  ) {
  }

  @Get()
  async getHello(): Promise<string> {
    return `Hello ${await this.clamScanService.version(1000)}`;
  }
}
