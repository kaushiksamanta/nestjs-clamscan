Nestjs-clamscan
[![NPM](https://nodei.co/npm/nestjs-clamscan.png)](https://npmjs.org/package/nestjs-clamscan)
===

A ClamAV client on nest.js

The library  uses TCP socket communicate with `clamd` (ClamAV daemon) through some commands

Clamd protocol is explained here:
<http://linux.die.net/man/8/clamd>

## Run the Docker ClamAV daemon

```bash
docker run --name clamav -d -p 3310:3310 quay.io/ukhomeofficedigital/clamav:latest
```

## Installation

```bash
npm install nestjs-clamscan
```