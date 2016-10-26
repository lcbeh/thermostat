'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20
  this.MINIMUM_TEMPERATURE = 10
  this.temperature = this.DEFAULT_TEMPERATURE
  this.powerSaver = true
};

Thermostat.prototype.increase = function () {
  if (this.powerSaver == true && this.temperature == 25) {
      throw 'Power Saver mode is on, temperature cannot be more than 25'
  };
  if (this.powerSaver == false && this.temperature == 32) {
      throw 'Power Saver mode is off, temperature cannot be more than 32'
  };
  this.temperature++;
};

Thermostat.prototype.decrease = function () {
  if (this.temperature == this.MINIMUM_TEMPERATURE) {
    throw 'Minimum temperature of 10 has been reached'
  };
  this.temperature--;
};

Thermostat.prototype.setPowerSaver = function(bool) {
  this.powerSaver = bool;
};
