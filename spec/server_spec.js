describe('my jasmine example server', function() {
  var server, express;

  beforeEach(function() {
    server = server || jasmine.createSpyObj('server', ['listen', 'configure', 'set', 'use']);
    spyOn(express = require('express'), 'createServer').andReturn(server);
    require('server');
  });

  it('listens for requests on port 8080', function() {
    expect(server.listen).toHaveBeenCalledWith(8080);
  });

  describe('is configured so that', function() {
    beforeEach(function() { 
      var configFunc = server.configure.argsForCall[0][0]; 
      configFunc();
    });

    it('does not use view cache', function() {
      expect(server.set).toHaveBeenCalledWith('view cache', false);
    });

    it('automatically parses POST data', function() {
      pending();
    });
  });
});
