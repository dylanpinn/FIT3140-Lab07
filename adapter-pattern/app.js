var BasicLogger = require('./BasicLogger');
var TimeLogger = require('./TimeLogger');
var TimeDateLogger = require('./TimeDateLogger');
var LoggerAdapter = require('./LoggerAdapter');
var basicLog = BasicLogger.getLogger('BasicLogger');
var timeLogger = TimeLogger.getLogger('TimeLogger');
var dateLogger = TimeDateLogger.getLogger('TimeDateLogger');

var loggerAdapter = LoggerAdapter.LoggerAdapter(timeLogger);
loggerAdapter.information('This is logged through LoggerAdapter');
loggerAdapter.debug('This is logged through LoggerAdapter');
loggerAdapter.warning('This is logged through LoggerAdapter');
loggerAdapter.error('This is logged through LoggerAdapter');

var loggerAdapter2 = LoggerAdapter.LoggerAdapter(basicLog);
loggerAdapter2.information('This is logged through LoggerAdapter');
loggerAdapter2.debug('This is logged through LoggerAdapter');
loggerAdapter2.warning('This is logged through LoggerAdapter');
loggerAdapter2.error('This is logged through LoggerAdapter');

var loggerAdapter3 = LoggerAdapter.LoggerAdapter(dateLogger);
loggerAdapter3.information('This is logged through LoggerAdapter');
loggerAdapter3.debug('This is logged through LoggerAdapter');
loggerAdapter3.warning('This is logged through LoggerAdapter');
loggerAdapter3.error('This is logged through LoggerAdapter');

