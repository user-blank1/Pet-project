import winston from "winston";

const logger = winston.createLogger({
  level: "info", //, only log entries with a minimum severity of info (or maximum integer priority of 2) will be written while all others are suppressed.
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export default logger;
//log levels:
/*
logger.error('error');
logger.warn('warn');
logger.info('info');
logger.verbose('verbose');
logger.debug('debug');
logger.silly('silly');
*/
