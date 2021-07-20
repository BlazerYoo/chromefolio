if ("getBattery" in navigator) {
  navigator.getBattery().then(function(battery) {
    
    updateChargeInfo();
    updateLevelInfo();

    battery.addEventListener('chargingchange', function(){
      updateChargeInfo();
    });
    function updateChargeInfo(){
      function charge() {
        document.getElementById("battery").style.display = "none";
        document.getElementById("battery-charge").style.display = "flex";
      }

      function noCharge() {
        document.getElementById("battery-charge").style.display = 'none';
        document.getElementById("battery").style.display = "flex";
      }
      battery.charging ? charge() : noCharge();
    }

    battery.addEventListener("levelchange", function(){
      updateLevelInfo();
    });
    function updateLevelInfo(){
      document.getElementById("battery").setAttribute("title", "Battery level: " + battery.level * 100 + "%");
      document.getElementById("battery-charge").setAttribute("title", "Battery level: " + battery.level * 100 + "%");
    }
  });
} else {
  ChromeSamples.setStatus("The Battery Status API is not supported on " +
    "this platform.");
}