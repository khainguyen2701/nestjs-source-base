import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger();
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.logger.verbose('verbose message');
    this.logger.debug('debug message');
    this.logger.error('error message');
    this.logger.log('log message');
    this.logger.warn('warn message');
    this.logger.fatal('fatal message');
    return this.appService.getHello();
  }
}
