function handler(controller) {
  return function(req, res) {
    controller[req.method.toLowerCase()](req, res);
  }
}

exports.addRoute = function(server, route, controller) {
  ['get', 'post', 'put', 'delete'].forEach(function(method) {
    server[method](route, handler(controller));
  });
}
