import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClamscanModule, ClamScanOptions } from '../src';
import { AppService } from './app.service';

const options: ClamScanOptions = {
  host: process.env.HOST || '127.0.0.1',
  port: Number(process.env.PORT) || 3310,
}

@Module({
  imports: [ClamscanModule.forRoot(options)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
