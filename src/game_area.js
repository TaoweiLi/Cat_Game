class GameArea {
  constructor(gameCanvas, catName) {
    this.canvas = gameCanvas
    this.catName = catName;

    this.cat = new Cat(this.catName, 55, 55, 80, this.canvas.height);
    this.obstacles = [];
    this.score = new ScoreBar(100, 50, 1080, 60);
    this.health = new HealthBar(100, 50, 50, 60);
    this.canvasContext = this.canvas.getContext("2d");
    this.frameNo = 0;  //start with frame 0
    this.nextObstacleFrame = 1;
    this.isGameOver = false;

    // only need set up once
    this.interval = setInterval(this.update.bind(this), 5); // (1000/5)=200 frames per second
    document.addEventListener('keydown', (event) => {
      let code = event.code;
      if (code === "Space" && this.cat.hitBottom(this.canvas.height) && !this.cat.isGameOver) {
        this.cat.meowSound();
        this.cat.quickJump(600);   //600(0.6 sec) the time interval btw start jump and start fall
      }
    }, false);

    this.updateList();
  }

  // store the score to local storage
  addScore(score) {
    let stored = localStorage.getItem("scores");
    let scores = [];
    if (stored !== undefined && stored !== null) {
      scores = JSON.parse(stored);
    }
    scores.push(score);
    scores = scores.sort((a, b) => b - a).slice(0, 10);
    localStorage.setItem("scores", JSON.stringify(scores));
    this.updateList();
  }

  updateList() {
    const scoreHistory = document.querySelector(".scoreHistory");
    let stored = localStorage.getItem("scores");
    let scores = [];
    if (stored !== undefined && stored !== null) {
      scores = JSON.parse(stored);
    }

    while (scoreHistory.hasChildNodes()) {
      scoreHistory.removeChild(scoreHistory.firstChild);
    }

    if (!scoreHistory.hasChildNodes()) {
      scores.map(item => {
        let li = document.createElement("li");
        li.innerText = item;
        scoreHistory.appendChild(li);
      })
    } else {
      let li = document.createElement("li");
      li.innerText = scores[scores.length - 1];
      scoreHistory.appendChild(li);
    }
  }

  // can be static
  getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  clear() {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  restartGame(catName) {
    document.getElementById("startButton").style.visibility = 'hidden';
    if (catName !== null && catName !== undefined) {
      this.catName = catName;
    }
    this.clear();
    this.cat = new Cat(this.catName, 55, 55, 80, this.canvas.height);
    this.obstacles = [];
    this.score = new ScoreBar(100, 50, 1080, 60);
    this.health = new HealthBar(100, 50, 50, 60);
    this.canvasContext = this.canvas.getContext("2d");
    this.frameNo = 0;  //start with frame 0
    this.nextObstacleFrame = 1;
    this.isGameOver = false;
  }

  gameOver() {
    this.cat.gameOver();
    this.isGameOver = true;
    document.getElementById("startButton").style.visibility = 'visible';
    this.addScore(this.score.score);
  }

  update() {
    if (this.health.hp === 0 && !this.isGameOver) {
      this.gameOver();
    }
    // check if the cat hits any obstacle on the screen.
    for (let i = 0; i < this.obstacles.length && !this.isGameOver; i += 1) {
      if (this.cat.isHit(this.obstacles[i])) {
        this.health.hp -= 1;
        this.cat.hitSound();
        if (this.health.hp > 0) {
          this.obstacles.shift();
        }
        break;
      }
    }

    this.clear();
    this.frameNo += 1;

    // random interval
    const intervalArr = [500, 600, 800];

    let obsScale = 1 + this.score.score / 500

    if (this.frameNo >= this.nextObstacleFrame && !this.cat.isGameOver) {
      let canvasWidth = this.canvas.width;
      let canvasHeight = this.canvas.height;
      this.obstacles.push(new Obstacle(canvasWidth, canvasHeight, this.frameNo));
      let randomInterval = intervalArr[Math.floor(Math.random() * intervalArr.length)] / obsScale;
      this.nextObstacleFrame = this.frameNo + randomInterval
    }

    // move obstacles if the game is not over
    for (let i = 0; i < this.obstacles.length; i += 1) {
      if (!this.cat.isGameOver) {
        this.obstacles[i].x += -1 * obsScale; // move to left with 1 px.
      }

      this.obstacles[i].render(this.canvasContext); // draw a updated obstacle on the canvas.
    }

    // delete obstacle when its right side moved out of the canvas.
    this.obstacles = this.obstacles.filter((el) => el.x > -1 * el.width)

    this.cat.newPosition(this.canvas.height);
    this.cat.render(this.canvasContext);

    if (this.everyinterval(10) && !this.cat.isGameOver) {
      this.score.increseScroe(1);
    }

    this.score.render(this.canvasContext);
    this.health.render(this.canvasContext);
  }

  everyinterval(n) {
    return this.frameNo % n === 0;
  }

}
