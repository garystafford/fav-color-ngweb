'use strict';

xdescribe('choices', function() {
  var _choices;

  beforeEach(module('favColor'));

  beforeEach(inject(function($injector) {
    _choices = $injector.get('choices');
  }));

  describe('creation', function() {
    it('return a function', function() {
      expect(typeof _choices).toBe('function');
    });
  });

  describe('isValid', function() {
    it('should be valid if name and birth date is setted', function() {
      var m = new _choices();
      m.name = 'Felipe Smith';
      m.birthDate = new Date();

      expect(m.isValid()).toBe(true);
    });

    it('should be not valid if name or birth date is not setted', function () {
      var m1 = new _choices();
      expect(m1.isValid()).toBe(false);

      var m2 = new _choices();
      m2.birthDate = new Date();
      expect(m2.isValid()).toBe(false);

      var m3 = new _choices();
      m3.name = 'Felipe Smith';
      expect(m3.isValid()).toBe(false);
    })
  })
});
