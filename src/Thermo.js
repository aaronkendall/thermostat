function Thermostat() {
  this.temp = 20;
  this.powerSaver = true;
};

  Thermostat.prototype.tempUp = function() {
    if(this.tempMax()){
      return;
    }
    else{
      this.temp++;
    };
  };

  Thermostat.prototype.tempDown = function() {
    if(this.tempMin()){
      return;
    }
    else {
      this.temp--;
    };
  };

  Thermostat.prototype.tempReset = function() {
    this.temp = 20;
  };

  Thermostat.prototype.tempMin = function() {
    if(this.temp == 10){
      return true;
    };
  };

  Thermostat.prototype.tempMax = function() {
    if(this.temp == 32 && this.powerSaver == false || this.temp == 25 && this.powerSaver == true ){
      return true;
    };
  };

  Thermostat.prototype.tempChange = function(degrees) {
    this.temp = degrees;
  };

  Thermostat.prototype.switchPowerSave = function() {
    if(this.temp > 25 && this.powerSaver == false){
      this.temp = 25;
      this.powerSaver = !this.powerSaver;
    }
    else {
      this.powerSaver = !this.powerSaver;
    };
  };

  Thermostat.prototype.energyUsage = function() {
    if(this.temp < 18){
      return 'green';
    }
    else if(this.temp > 25){
      return 'red';
    }
    else {
      return 'yellow';
    };
  };
