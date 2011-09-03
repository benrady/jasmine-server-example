var fs = require('fs'),
    http = require('http'),
    _ = require('underscore'),
    path = require('path');

fs.mkdirSyncP = function(fullPath, mode) {
  var parts = fullPath.split('/'),
      currentPath = "/";
  _.each(parts, function(part) {
    if(!part) { return; }
    currentPath = currentPath + part + '/';
    if(!path.existsSync(currentPath)) {
      fs.mkdirSync(currentPath, mode);
    }
  });
};

http.getJSON = function(options, callback, processor) {
  processor = processor || JSON.parse;
  return http.get(options, function(res){
    var body = "";
    res.on('data', function(chunk) { body += chunk; });
    res.on('end', function() {
      try {
        var val = processor(body);
      } catch(e) {
        console.log("Failed to eval: ", e, body);
      }
      callback(val);
    });
  });
}

_.mixin({
  curry: function(func) {
    bindArgs = _.toArray(arguments);
    bindArgs.shift();
    bindArgs.unshift(func, {});
    return _.bind.apply(this, bindArgs);
  }
});
