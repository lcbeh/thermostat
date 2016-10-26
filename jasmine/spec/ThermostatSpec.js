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

  describe('Changing Temperature', function() {
    it('can increase the temperature', function() {
      thermostat.increase();
      expect(thermostat.temperature).toBe(21);
    });
  });

});
