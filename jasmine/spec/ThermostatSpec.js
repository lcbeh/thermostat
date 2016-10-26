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

    it('can decrease the temperature', function() {
      thermostat.decrease();
      expect(thermostat.temperature).toBe(19);
    });
  });

  describe('Minimum temperature', function() {
    it('is 10', function() {
      for(var i=1; i<11; i++) {thermostat.decrease();}
      console.log(thermostat.temperature)
      expect( function() {thermostat.decrease(); } ).toThrow('Minimum temperature of 10 has been reached');
    });
  });

  describe('Power Saving mode', function() {
    it('if on, maximum temperature is 25', function() {
      for(var i=1; i<6; i++) {thermostat.increase();}
      expect( function() {thermostat.increase(); } ).toThrow('Power Saver mode is on, temperature cannot be more than 25');
    });

    it('if off, maximum temperature is 32' , function() {
      spyOn(thermostat, 'powerSaver()').and.returnValue(false);
      for(var i=1; i<13; i++) {thermostat.increase();}
      expect( function() {thermostat.increase(); } ).toThrow('Power Saver mode is off, temperature cannot be more than 32');
    });
  });


});
