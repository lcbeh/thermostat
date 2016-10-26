$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#increase_temperature').on('click', function() {
    thermostat.increase();
    $('#temperature').text(thermostat.temperature);
  });

});
