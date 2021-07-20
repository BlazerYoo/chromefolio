(function startTime() {
  let time = new Date().toLocaleTimeString(navigator.language, {hour: "2-digit", minute:"2-digit"});
  if (time[0] === "0") {
    document.getElementById("time").innerHTML = time.substring(1, 5);
  } else {
    document.getElementById("time").innerHTML = time.substring(0, 5);
  }
  t = setTimeout(function() {startTime()}, 500);
})();
