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
    it('and display color is Yellow', function() {
      expect(thermostat.displayColor()).toBe('Yellow');
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
      expect( function() {thermostat.decrease(); } ).toThrow('Minimum temperature of 10 has been reached');
    });
  });

  describe('Power Saving mode', function() {
    it('if on, maximum temperature is 25', function() {
      for(var i=1; i<6; i++) {thermostat.increase();}
      expect( function() {thermostat.increase(); } ).toThrow('Power Saver mode is on, temperature cannot be more than 25');
    });

    it('if off, maximum temperature is 32' , function() {
      thermostat.setPowerSaver(false);
      for(var i=1; i<13; i++) {thermostat.increase();}
      expect( function() {thermostat.increase(); } ).toThrow('Power Saver mode is off, temperature cannot be more than 32');
    });

    it('is on by default', function() {
      expect(thermostat.powerSaver).toBe(true);
    });
  });

  describe('Reset button', function() {
    it('resets temperature to 20', function() {
    for(var i=1; i<4; i++) {thermostat.increase();}
    thermostat.reset()
    expect(thermostat.temperature).toBe(20)
    });
  });

  describe('Display color for energy usage', function() {
    it('is Green when temperature is less than 18', function() {
    for(var i=1; i<4; i++) {thermostat.decrease();}
    expect(thermostat.displayColor()).toBe('Green')
    });
    it('is Yellow when temperature is less than 25', function() {
      thermostat.reset
    for(var i=1; i<3; i++) {thermostat.increase();}
    expect(thermostat.displayColor()).toBe('Yellow')
    });
    it('is Red when temperature is greater than 24', function() {
    thermostat.reset
    thermostat.setPowerSaver(false)
    for(var i=1; i<9; i++) {thermostat.increase();}
    expect(thermostat.displayColor()).toBe('Red')
    });
  });
});
