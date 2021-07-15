(function startTime() {
  document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
  t = setTimeout(function() {startTime()}, 500);
})();