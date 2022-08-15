var canvasEl
var gameArea
var soundOn = true

// document.addEventListener("DOMContentLoaded", function () {
//   const canvasEl = document.getElementsByTagName("myCanvas")[0];
//   canvasEl.width = GameArea.DIM_X;
//   canvasEl.height = GameArea.DIM_Y;

//   const ctx = canvasEl.getContext("2d");

// });

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

// cat options clicks
// document.getElementById("cat1").addEventListener("click", catSwitch);
// function catSwitch() {
//   if ()
// }


function catSwitch() {
  // document.getElementById("demo").innerHTML = "Hello World";
}
