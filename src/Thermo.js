function Thermostat() {
  this.temp = 20;
  this.power_saver = true;
};

  Thermostat.prototype.temp_up = function() {
    if(this.temp_max()){
      return;
    }
    else{
      this.temp++;
    };
  };

  Thermostat.prototype.temp_down = function() {
    if(this.temp_min()){
      return;
    }
    else {
      this.temp--;
    };
  };

  Thermostat.prototype.temp_reset = function() {
    this.temp = 20;
  };

  Thermostat.prototype.temp_min = function() {
    if(this.temp == 10){
      return true;
    };
  };

  Thermostat.prototype.temp_max = function() {
    if(this.temp == 32 && this.power_saver == false || this.temp == 25 && this.power_saver == true ){
      return true;
    };
  };

  Thermostat.prototype.temp_change = function(degrees) {
    this.temp = degrees;
  };

  Thermostat.prototype.power_saver_off = function() {
    this.power_saver = false;
  };

  Thermostat.prototype.power_saver_on = function() {
    this.power_saver = true;
  };
