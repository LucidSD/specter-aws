const { log } = require('../modules/logger');

const info = (msg: any, data: any) => {
  log('INFO', msg, data);
};

const warn = (msg: any, data: any) => {
  log('WARN', msg, data);
};

module.exports = { info, warn };
