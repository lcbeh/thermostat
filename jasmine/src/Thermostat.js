'use strict';

function Thermostat() {
  const DEFAULT_TEMPERATURE = 20;
  this.temperature = DEFAULT_TEMPERATURE
};

Thermostat.prototype.increase = function () {
  this.temperature++;
};

Thermostat.prototype.decrease = function () {
  this.temperature--;
};
