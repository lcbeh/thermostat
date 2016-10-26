'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = this.DEFAULT_TEMPERATURE
};

Thermostat.prototype.increase = function () {
  this.temperature++;
};

Thermostat.prototype.decrease = function () {
  if (this.temperature == this.MINIMUM_TEMPERATURE) {
    throw 'Minimum temperature of 10 has been reached'
  };
  this.temperature--;
};
