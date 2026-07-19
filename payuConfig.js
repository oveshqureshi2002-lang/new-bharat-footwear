const PayU = require('payu-websdk');
const config = require('./config');

module.exports.payuClient = new PayU({
  key: config.payu.key,
  salt: config.payu.salt,
}, config.payu.mode);     // Possible value  = TEST/LIVE
