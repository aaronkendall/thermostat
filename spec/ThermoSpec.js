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

  it("should not let temperature go above 32 degrees", function() {
    thermostat.temp_change(32);
    thermostat.temp_up();
    expect(thermostat.temp).toEqual(32);
  });

  it("should change temp", function() {
    thermostat.temp_change(10);
    expect(thermostat.temp).toEqual(10);
  });
});
