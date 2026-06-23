const config = require('../config')
const util = require('util');

if (!util.isDate) {
  util.isDate = util.types.isDate;
}

const SimpleNodeLogger = require('simple-node-logger'),
logger = SimpleNodeLogger.createSimpleLogger( config.logger );

module.exports = logger
