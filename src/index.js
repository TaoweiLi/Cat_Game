var canvasEl
var gameArea
var soundOn = true
// var currentGif = cat1_run_gif;

// document.addEventListener("DOMContentLoaded", function () {
//   const canvasEl = document.getElementsByTagName("myCanvas")[0];
//   canvasEl.width = GameArea.DIM_X;
//   canvasEl.height = GameArea.DIM_Y;

//   const ctx = canvasEl.getContext("2d");

// });


document.addEventListener("DOMContentLoaded", function () {
  canvasEl = document.getElementsByTagName("canvas")[0];
  gameArea = new GameArea(canvasEl, "cat1")
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
document.getElementById("cat1").addEventListener("click", () => { 
  catSwitch("cat1");
  document.getElementById("cat1").blur();
  // document.getElementById("cat1").style.visibility = 'hidden';
});
document.getElementById("cat2").addEventListener("click", () => { 
  catSwitch("cat2");
  document.getElementById("cat2").blur();
  // document.getElementById("cat2").style.visibility = 'hidden';
});
document.getElementById("cat3").addEventListener("click", () => { 
  catSwitch("cat3");
  document.getElementById("cat3").blur();
  // document.getElementById("cat3").style.visibility = 'hidden';
});

function catSwitch(catName) {
  gameArea.restartGame(catName);
}

//restart button
document.getElementById("restartButton").addEventListener("click", () => {
  restart();
  // document.getElementById("cat1").blur();
  document.getElementById("cat1").style.visibility = 'visible';
});

function restart(catName) {
  gameArea.restartGame(catName);
}

// function startGame() {
//   let startDiv = document.getElementById("start");
//   let gameCanvas = document.getElementById("myCanvas");
//   let gameOver = document.getElementById("game-over");

//   startDiv.style.display = "none";
//   gameCanvas.style.display = "block";
//   gameOver.style.display = "none";
//   gameArea.restartGame(catName);
// }
// function gameOver() {
//   let startDiv = document.getElementById("start");
//   let gameCanvas = document.getElementById("myCanvas");
//   let gameOver = document.getElementById("game-over");

//   startDiv.style.display = "none";
//   gameCanvas.style.display = "none";
//   gameOver.style.display = "block";
//   gameArea.restartGame(catName);
// }