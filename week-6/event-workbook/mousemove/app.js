
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("red-box").innerHTML = coor;
  }
  
  function clearCoor() {
    document.getElementById("red-box").innerHTML = "";
  }