if ("getBattery" in navigator) {
  navigator.getBattery().then(function(battery) {
    updateLevelInfo();

    battery.addEventListener("levelchange", function(){
      updateLevelInfo();
    });
    function updateLevelInfo(){
      document.getElementById("battery").setAttribute("title", "Battery level: " + battery.level * 100 + "%");
    }
  });
} else {
  ChromeSamples.setStatus("The Battery Status API is not supported on " +
    "this platform.");
}