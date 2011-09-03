var path = require('path'),
    os = require('os');

require('monkeys');

global._ = require('underscore');

global.env = {
  production: function() {
    return os.hostname() == "sup-chimon05";
  },
  test: function() {
    return false; // override in spec_helper
  }
};
