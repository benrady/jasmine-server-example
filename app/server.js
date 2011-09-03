var express = require('express'),
    server = express.createServer(),
    serverBootstrap = require('bootstrap');

process.on('uncaughtException', function (err) {
  console.log('Uncaught exception: ' + err.stack);
});

server.configure(function() {
  server.set('view cache', false);
  server.use(express.bodyParser()); // must precede express.static
  server.use(express.static('public'));
});

serverBootstrap(server);

server.listen(8080);
