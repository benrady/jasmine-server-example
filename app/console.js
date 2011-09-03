var repl = require("repl"),
    fs = require("fs"),
    path = require("path"),
    _ = require("underscore"),
    proc;

console.log("=================");
console.log("  SERVER CONSOLE ");
console.log("=================\n");

require('globals');

var vars = {};

["fs", "http", "path"].forEach(function(key) {
  vars[key] = require(key);
});

["services", "models"].forEach(function(dir) {
  fs.readdirSync("app/" + dir).forEach(function(filename) {
    filename = path.basename(filename, ".js");
    vars[camelCase(filename)] = require(dir + "/" + filename);
  });
});

console.log("Preloaded variables:\n" + _.keys(vars).sort().join(", ") + "\n");
console.log("Type '.exit' to close this console.\n");

proc = repl.start("siren> ");

_.each(vars, function(val, key) { proc.context[key] = val; });

function camelCase(str) {
  var out = "";
  var parts = str.split('_');
  out += parts.shift();
  parts.forEach(function(part) {
    var m = part.match(/(\w)(.*)/);
    out += (m[1].toUpperCase() + m[2]);
  });
  return out;
}
