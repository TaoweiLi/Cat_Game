var canvasEl
var gameArea
var soundOn = true

document.addEventListener("DOMContentLoaded", function () {
  canvasEl = document.getElementsByTagName("canvas")[0];
  gameArea = new GameArea(canvasEl)
});

// sound  control
document.getElementById("soundButton").innerText = "Sound On";
document.getElementById("soundButton").addEventListener("click", soundSwitch);
function soundSwitch() {
  if (soundOn) {
    document.getElementById("soundButton").innerText = "Sound Off";
    soundOn = false;
    document.getElementById("soundButton").blur()  //delete the focus
  } else {
    document.getElementById("soundButton").innerText = "Sound On";
    soundOn = true;
    document.getElementById("soundButton").blur()  
  }
}
