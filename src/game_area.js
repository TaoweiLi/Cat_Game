class GameArea {
  constructor(gameCanvas) {
    this.canvas = gameCanvas
    this.cat = new Cat("red", 10, 10, 10, this.canvas.height);
    this.obstacles = [];
    this.canvasContext = this.canvas.getContext("2d");
    this.frameNo = 0;  //第几张frame
    this.interval = setInterval(this.update.bind(this), 20); //一秒50张画

    document.addEventListener('keydown', (event) => {
      var code = event.code;
      if (code == "Space" && this.cat.hitBottom(this.canvas.height)) {
        this.cat.meow();
        this.cat.quickJump(600);
      }
    }, false);
  }

  clear() {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  gameOver() {

  }

  update() {
    for (let i = 0; i < this.obstacles.length; i += 1) {
      if (this.cat.isHit(this.obstacles[i])) {
        return; //不继续画了。
      }
    }

    this.clear();

    this.frameNo += 1;
    if (this.frameNo === 1 || this.everyinterval(150)) {
      let canvasWidth = this.canvas.width;
      let canvasHeight = this.canvas.height;
      let height = Math.floor(Math.random() * (Obstacle.maxHeight - Obstacle.minHeight + 1) + Obstacle.minHeight);
      this.obstacles.push(new Obstacle("green", 10, height, canvasWidth, canvasHeight - height));
    }

    for (let i = 0; i < this.obstacles.length; i += 1) {
      this.obstacles[i].x += -1;
      if (this.obstacles[i].x > 0) {
        this.obstacles[i].render(this.canvasContext);
      }
    }
    
    this.obstacles = this.obstacles.filter((el) => el.x > 0)

    // myScore.text = "SCORE: " + this.frameNo;
    // myScore.update();
    this.cat.newPosition(this.canvas.height);
    this.cat.render(this.canvasContext);
    // myBox.update();
  }

  everyinterval(n) {
    if ((this.frameNo / n) % 1 == 0) { return true; }
    return false;
  }
}
