var canvasEl
var gameArea
var soundOn = true

document.addEventListener("DOMContentLoaded", function () {
  canvasEl = document.getElementsByTagName("canvas")[0];
  gameArea = new GameArea(canvasEl)
});

// sound  control
document.getElementById("soundBotton").innerText = "Sound On";
document.getElementById("soundBotton").addEventListener("click", soundSwitch);
function soundSwitch() {
  if (soundOn) {
    document.getElementById("soundBotton").innerText = "Sound Off";
    soundOn = false;
    document.getElementById("soundBotton").blur()  //delete the focus
  } else {
    document.getElementById("soundBotton").innerText = "Sound On";
    soundOn = true;
    document.getElementById("soundBotton").blur()  
  }
}
