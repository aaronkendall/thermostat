$(function(){

  var thermostat = new Thermostat();

    var display = function() {
      $("#temperature").text(thermostat.temp);
      $("#colour").css("color", thermostat.energyUsage());
      $("#powerSaverAlert").html(thermostat.powerSaverAlert());
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
