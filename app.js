var thermostat = new Thermostat();

Display();

function Display() {
  document.getElementById("temp").innerHTML = thermostat.temp;
};

document.getElementById("tempUp").onclick = function() {
  thermostat.tempUp();
  Display();
};

document.getElementById("tempDown").onclick = function() {
  thermostat.tempDown();
  Display();
};

document.getElementById("switchPowerSave").onclick = function() {
  thermostat.switchPowerSave();
  Display();
}
