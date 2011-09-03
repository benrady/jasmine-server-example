describe('router', function() {
  var router, server;

  beforeEach(function() {
    server = jasmine.createSpyObj('server', ['get', 'post', 'put', 'delete']);
    router = require('router');
  });

  describe('addRoute', function() {
    var controller;
    beforeEach(function() {
      controller = jasmine.createSpyObj('controller', ['get', 'put', 'post', 'delete']);
      router.addRoute(server, '/myRoute', controller);
    });

    it('registers the specified path for the route', function() {
      expect(server.get.argsForCall[0][0]).toEqual('/myRoute');
    });

    describe('based on http method', function() {
      var res, req;
      beforeEach(function() {
        req = {};
        res = jasmine.createSpyObj('response', ['send']);
      });

      ['GET', 'DELETE', 'POST', 'PUT'].forEach(function(method) {
        it('routes '+ method +' requests to controller.' + method.toLowerCase(), function() {
          req.method = method;
          server[method.toLowerCase()].argsForCall[0][1](req, res);
          expect(controller[method.toLowerCase()]).toHaveBeenCalledWith(req, res);
        });
      });
    });
  });
});
