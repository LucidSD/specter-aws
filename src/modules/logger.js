const winston = require('winston');
const expressWinston = require('express-winston');
const serializeError = require('serialize-error');

const myCustomLevels = {
  levels: {
    FATAL: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    DEBUG: 4,
    TRACE: 5,
  },
  colors: {
    FATAL: 'red bold',
    ERROR: 'red',
    WARN: 'yellow',
    INFO: 'green',
    DEBUG: 'cyan',
    TRACE: 'blue',
  },
};
winston.addColors(myCustomLevels.colors);

// const stderrLevels = new Set();
// Object.keys(myCustomLevels.levels).forEach((level) => {
//   if (myCustomLevels.levels[level] < myCustomLevels.levels.INFO) {
//     stderrLevels.add(level);
//   }
// });

const loggerFormat = winston.format.combine(
  winston.format.timestamp({ format: 'HH:mm:ss' }),
  winston.format.splat(),
  winston.format.prettyPrint(),

);

const consoleLoggerFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.splat(),
  winston.format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
  winston.format.colorize({ all: true }),
);

const logger = winston.createLogger({
  levels: myCustomLevels.levels,
  level: 'INFO',
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error', format: loggerFormat }),
    new winston.transports.File({ filename: 'combined.log', format: loggerFormat }),
    new winston.transports.Console({ format: consoleLoggerFormat }),
  ],
});

const log = (level, msg, data) => {
  let logMessage;
  let logData;
  if (msg instanceof Error) {
    logData = serializeError(msg);
    logMessage = logData.stack || logData.message || '';
    delete logData.message;
    delete logData.stack;
  } else {
    logMessage = msg;
    logData = data;
  }
  logger.log(level, logMessage, logData);
};

const requestLogConfig = {
  winstonInstance: logger,
  level: 'INFO',
  expressFormat: true,
};

// eslint-disable-next-line new-cap
const requestLogger = new expressWinston.logger(requestLogConfig);

module.exports = { log, requestLogger };
