describe('monkey patches', function() {
  it('curries', function() {
    var newFunc = _.curry(function(one, two) {
      return one + two;
    }, 1);
    expect(newFunc(2)).toEqual(3);
  });

  describe('JavaScript', function() {
    it('is awesome', function() {
      expect('awesome as hell').toBeAwesome('as hell');
    });
  });

  describe('jasmine spies', function() {
    it('can be single functions', function() {
      var aFunction = jasmine.createSpy('a function')
      aFunction('hello function')
      expect(aFunction).toHaveBeenCalledWith('hello function');
    });

    it('can be entire objects', function() {
      var mockObject = jasmine.createSpyObj('an object', ['aFunction', 'anotherFunction']);

      mockObject.aFunction('hello object');
      mockObject.anotherFunction();

      expect(mockObject.aFunction).toHaveBeenCalledWith('hello object');
      expect(mockObject.anotherFunction).toHaveBeenCalled();
    });
  });
});
