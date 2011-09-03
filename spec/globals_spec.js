var os = require('os');
require('globals');

describe('env', function() {
  describe('production', function() {
    describe('on server sup-chivmmon03', function() {
      beforeEach(function() {
        spyOn(os, 'hostname').andReturn("sup-chimon05");
      });
      it('returns true', function() {
        expect(env.production()).toBeTruthy();
      });
    });

    describe('on another server', function() {
      beforeEach(function() {
        spyOn(os, 'hostname').andReturn("another-server");
      });
      it('returns false', function() {
        expect(env.production()).toBeFalsy();
      });
    });
  });
});

