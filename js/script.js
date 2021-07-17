(function startTime() {
  document.getElementById("time").innerHTML = new Date().toLocaleTimeString(navigator.language, {hour: "2-digit", minute:"2-digit"}).substring(0, 5);
  t = setTimeout(function() {startTime()}, 500);
})();



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
