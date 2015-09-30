$(function(){

  var thermostat = new Thermostat();

    var display = function() {
      $("#temperature").text(thermostat.temp);
      $("#temperature").css("color", thermostat.energyUsage());
    };

    display();

    $("#tempUp").click(function(){
      thermostat.tempUp();
      display();
    });

    $("#tempDown").click(function(){
      thermostat.tempDown();
      display();
    });

    $("#switchPowerSave").click(function(){
      thermostat.switchPowerSave();
      display();
    });

    $("#reset").click(function(){
      thermostat.tempReset();
      display();
    });

});
