import { LoggerService } from '@nestjs/common';
import winston, { createLogger, Logger, format, transports } from 'winston';
import chalk from 'chalk';
import dayjs from 'dayjs';

type MyLoggerOptions = {
  context?: string;
  message: string;
  level: string;
  time: string;
};

const myCustomLevels = {
  levels: {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    debug: 4,
    trace: 5,
  },
  colors: {
    fatal: 'magenta', // fixed
    error: 'red', // fixed
    warning: 'yellow',
    info: 'green',
    debug: 'blue',
    trace: 'grey',
  },
};

winston.addColors(myCustomLevels.colors);

export class MyLogger implements LoggerService {
  private logger: Logger;

  constructor() {
    this.logger = createLogger({
      levels: myCustomLevels.levels,
      transports: [
        new transports.Console({
          format: format.combine(
            format.colorize({ all: true }),
            format.printf(
              ({ context, message, level, time }: MyLoggerOptions) => {
                const strApp = chalk.green('[NestJS]');
                const strContext = chalk.yellow(`[${context}]`);
                return `${strApp} - ${time} ${level} ${strContext} ${message}`;
              },
            ),
          ),
        }),
      ],
    });
  }

  log(message: string, context?: string) {
    const time = dayjs().format('YYYY-MM-DD HH:mm:ss.SSS');
    this.logger.log('info', message, { context, time });
  }
  error(message: string, context?: string) {
    const time = dayjs().format('YYYY-MM-DD HH:mm:ss.SSS');
    this.logger.log('error', message, { context, time });
  }
  warn(message: string, context?: string) {
    const time = dayjs().format('YYYY-MM-DD HH:mm:ss.SSS');
    this.logger.log('warning', message, { context, time });
  }
  debug(message: string, context?: string) {
    const time = dayjs().format('YYYY-MM-DD HH:mm:ss.SSS');
    this.logger.log('debug', message, { context, time });
  }
  fatal(message: string, context?: string) {
    const time = dayjs().format('YYYY-MM-DD HH:mm:ss.SSS');
    this.logger.log('fatal', message, { context, time });
  }
  verbose(message: string, context?: string) {
    const time = dayjs().format('YYYY-MM-DD HH:mm:ss.SSS');
    this.logger.log('trace', message, { context, time });
  }

  setLogLevel(level: string) {
    this.logger.level = level;
  }
}
