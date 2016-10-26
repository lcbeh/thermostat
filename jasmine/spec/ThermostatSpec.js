'use strict';
describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
   thermostat = new Thermostat();
 });

  describe('Default Temperature', function() {
    it('is 20 degrees', function() {
      expect(thermostat.temperature).toBe(20);
    });

  });


});
