import { ConsoleLogger } from '@nestjs/common';

export class MyLoggerDev extends ConsoleLogger {
  log(message: string, context?: string) {
    console.log(`${context ?? 'Nest'}: ${message}`);
  }
  error(message: string, context?: string) {
    console.error(`${context ?? 'Nest'}: ${message}`);
  }
  warn(message: string, context?: string) {
    console.warn(`${context ?? 'Nest'}: ${message}`);
  }
  debug(message: string, context?: string) {
    console.debug(`${context ?? 'Nest'}: ${message}`);
  }
  fatal(message: string, context?: string) {
    console.error(`${context ?? 'Nest'}: ${message}`);
  }
  verbose(message: string, context?: string) {
    console.log(`${context ?? 'Nest'}: ${message}`);
  }
}
