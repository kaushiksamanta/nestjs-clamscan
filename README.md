# Nestjs-clamscan
[![NPM](https://nodei.co/npm/nestjs-clamscan.png)](https://npmjs.org/package/nestjs-clamscan)
===
[![npm version](https://badge.fury.io/js/nestjs-clamscan.svg)](https://badge.fury.io/js/nestjs-clamscan)
[![total downloads of badging](https://img.shields.io/npm/dt/nestjs-clamscan.svg)](https://www.npmjs.com/package/nestjs-clamscan)
[![badging's License](https://img.shields.io/npm/l/badging.svg)](https://www.npmjs.com/package/nestjs-clamscan)
[![star github.com/YounGoat/nodejs.badging](https://img.shields.io/github/stars/kaushiksamanta/nestjs-clamscan.svg?style=social&label=Star)](https://github.com/kaushiksamanta/nestjs-clamscan/stargazers)

A ClamAV client on nest.js

The library  uses TCP socket communicate with `clamd` (ClamAV daemon) through some commands

Clamd protocol is explained here:
<http://linux.die.net/man/8/clamd>

## Run the Docker ClamAV daemon

```bash
$ docker run --name clamav -d -p 3310:3310 quay.io/ukhomeofficedigital/clamav:latest
```

## Installation

```bash
$ npm install nestjs-clamscan
```

# Usage

## Intialize Module

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClamscanModule, ClamScanOptions } from 'nestjs-clamscan';

const options: ClamScanOptions = {
  host: process.env.HOST || '127.0.0.1',
  port: Number(process.env.PORT) || 3310,
}

@Module({
  imports: [ClamscanModule.forRoot(options)],
  controllers: [AppController]
})
export class AppModule {}

```

## Intialize Service
```typescipt
import { Controller, Get } from '@nestjs/common';
import { ClamScanService } from 'nestjs-clamscan';

@Controller()
export class AppController {
  constructor(
    private readonly clamScanService: ClamScanService
  ) {
  }

  @Get()
  getVersion(): Promise<string> {
    return this.clamScanService.version();
  }

  @Get('/scan-infected')
  async scanInfected() {
    return this.clamScanService.scanFile(__dirname + '/files/test.virus.txt');
  }

  @Get('/scan-safe')
  async scanSafe() {
    return this.clamScanService.scanFile(__dirname + '/files/test.safe.txt');
  }

  @Get('/scan-directory')
  async scanDirectory() {
    return this.clamScanService.scanDirectory(__dirname + '/files', {
      timeout: 5000,
      chunkSize: 64 * 1024,
      scanningFile: 10,
      detail: true,
      cont: true
    });
  }
}

```