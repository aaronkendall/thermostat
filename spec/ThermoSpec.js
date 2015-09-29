describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start with a temperature of 20 degrees", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("should be possible to increase temperature by 1 degree", function() {
    thermostat.temp_up();
    expect(thermostat.temp).toEqual(21);
  });

  it("should be possible to decrease temperature by 1 degree", function() {
    thermostat.temp_down();
    expect(thermostat.temp).toEqual(19);
  });

  it("should reset to 20 degrees when the reset method is called", function() {
    thermostat.temp_up();
    thermostat.temp_reset();
    expect(thermostat.temp).toEqual(20);
  });

  it("should not let temperature go below 10 degrees", function() {
    thermostat.temp_change(10);
    thermostat.temp_down();
    expect(thermostat.temp).toEqual(10);
  });

  it("should change temp", function() {
    thermostat.temp_change(10);
    expect(thermostat.temp).toEqual(10);
  });

  describe("Power saving mode", function() {

    it("starts with power saving mode on", function() {
      expect(thermostat.power_saver).toEqual(true);
    });

    it("can be turned off", function() {
      thermostat.power_saver_off();
      expect(thermostat.power_saver).toEqual(false);
    });

    it("can be turned back on", function() {
      thermostat.power_saver_off();
      thermostat.power_saver_on();
      expect(thermostat.power_saver).toEqual(true);
    });

    it("with power saver mode on, max temperature is 25 degrees", function() {
      thermostat.temp_change(25);
      thermostat.temp_up();
      expect(thermostat.temp).toEqual(25);
    });

    it("with power saver mode off, max temperature is 32 degrees", function() {
      thermostat.power_saver_off();
      thermostat.temp_change(32);
      thermostat.temp_up();
      expect(thermostat.temp).toEqual(32);
    });
  });
});
