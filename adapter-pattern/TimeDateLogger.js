var moment = require('moment');

function TimeDateLogger(name) {
  this.name = name;
  var LOG_HEADER = '[' + name + ']';
  var self = this;

  var getTimeDate = function () {
    return getTime() + ' ' + getDate();
  }

  var getTime = function() {
    return '[Time: ' + moment().format('HH:mm') + ']';
  }

  var getDate = function() {
    return '[Date: ' + moment().format('DD:MM:YY') + ']';
  }

  return {
    getName: function getName() {
      return self.name;
    },
    getType: function getType() {
      return 'TimeDateLogger';
    },
    i: function i(message) {
      console.info(LOG_HEADER + getTimeDate() + '[I]: ' + message);
    },
    d: function d(message) {
      console.log(LOG_HEADER + getTimeDate() + '[D]: ' + message);
    },
    w: function w(message) {
      console.warn(LOG_HEADER + getTimeDate() + '[W]: ' + message);
    },
    e: function e(message) {
      console.error(LOG_HEADER + getTimeDate() + '[E]: ' + message);
    }
  }
}

module.exports = {
  getLogger: TimeDateLogger
}

