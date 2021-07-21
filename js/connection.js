let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
  document.getElementById("connection").setAttribute("title", "Connection: " + connection.effectiveType);
}