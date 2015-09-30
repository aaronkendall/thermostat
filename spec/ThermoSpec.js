describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start with a temperature of 20 degrees", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("should be possible to increase temperature by 1 degree", function() {
    thermostat.tempUp();
    expect(thermostat.temp).toEqual(21);
  });

  it("should be possible to decrease temperature by 1 degree", function() {
    thermostat.tempDown();
    expect(thermostat.temp).toEqual(19);
  });

  it("should reset to 20 degrees when the reset method is called", function() {
    thermostat.tempUp();
    thermostat.tempReset();
    expect(thermostat.temp).toEqual(20);
  });

  it("should not let temperature go below 10 degrees", function() {
    thermostat.tempChange(10);
    thermostat.tempDown();
    expect(thermostat.temp).toEqual(10);
  });

  it("should change temp", function() {
    thermostat.tempChange(10);
    expect(thermostat.temp).toEqual(10);
  });

  it("should return green when temperature is 18 or less", function() {
    thermostat.tempChange(17);
    expect(thermostat.energyUsage()).toEqual('green');
  });

  it("should return red when temperature is greater than 25", function() {
    thermostat.tempChange(26);
    expect(thermostat.energyUsage()).toEqual('red');
  });

  it("should return yellow when temperature is between 18 and 25", function() {
    thermostat.tempChange(23);
    expect(thermostat.energyUsage()).toEqual('yellow');
  });

  describe("Power saving mode", function() {

    it("starts with power saving mode on", function() {
      expect(thermostat.powerSaver).toEqual(true);
    });

    it("can be turned off", function() {
      thermostat.switchPowerSave();
      expect(thermostat.powerSaver).toEqual(false);
    });

    it("can be turned back on", function() {
      thermostat.switchPowerSave();
      thermostat.switchPowerSave();
      expect(thermostat.powerSaver).toEqual(true);
    });

    it("with power saver mode on, max temperature is 25 degrees", function() {
      thermostat.tempChange(25);
      thermostat.tempUp();
      expect(thermostat.temp).toEqual(25);
    });

    it("with power saver mode off, max temperature is 32 degrees", function() {
      thermostat.switchPowerSave();
      thermostat.tempChange(32);
      thermostat.tempUp();
      expect(thermostat.temp).toEqual(32);
    });

    it("resets temperature to 25 if power saving mode is turned on and the temperature is higher", function() {
      thermostat.switchPowerSave();
      thermostat.tempChange(32);
      thermostat.switchPowerSave();
      expect(thermostat.temp).toEqual(25);
    });
  });
});
