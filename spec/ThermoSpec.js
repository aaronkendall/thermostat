describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start with a temperature of 20 degrees", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("should be possible to increase temperature by 1 degree", function(){
    thermostat.temp_up();
    expect(thermostat.temp).toEqual(21);
    console.log(thermostat)
  });

  it("should be possible to decrease temperature by 1 degree", function(){
    thermostat.temp_down();
    expect(thermostat.temp).toEqual(19);
    console.log(thermostat)
  });
});
