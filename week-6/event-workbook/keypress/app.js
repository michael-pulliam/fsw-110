/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */
/*
function doWhichKey(e) { 
    e = e || window.event; 
    let charCode = e.keyCode || e.which; 
    return String.fromCharCode(charCode); 
  } 

  window.addEventListener('keypress', function (e) { 
    this.document.getElementById("output").innerHTML = "You pressed " + doWhichKey(e);
  }, false);*/
  /*
  function myFunction(event) {
      
    var x = event.keyCode        // Get the Unicode value
    var y = String.fromCharCode(x);    // Convert the value into a character
    this.window.getElementById("output").innerHTML = "Number: " + x + " = Character: " + y;

}/*
  window.addEventListener("keypress", function(event){

  },false);*/
  function doWhichKey(e) { 
    e = e || window.event; 
    let charCode = e.keyCode || e.which; 
    let char = String.fromCharCode(charCode);
    return `You've pressed the "${char}" key. It's key code is ${charCode}` 
  } 

  window.addEventListener('keypress', function (e) { 
    this.document.getElementById("output").innerHTML = doWhichKey(e);
  }, false);  

