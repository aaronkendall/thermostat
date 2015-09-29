function Thermostat() {
  this.temp = 20;
};

Thermostat.prototype.temp_up = function() {
  this.temp++;
};

Thermostat.prototype.temp_down = function() {
  this.temp--;
};
