var fs = require('fs');
var path = require('path');
var specDir = path.dirname(fs.realpathSync(__filename));
require.paths.unshift(path.join(specDir, "../app"));

require("globals");

jasmine.getEnv().beforeEach(function() {
  spyOn(require('child_process'), 'spawn');
  this.addMatchers({
    toBeAwesome: function(expectedAwesomeness) {
      return this.actual == 'awesome ' + expectedAwesomeness;
    },
  });
});
