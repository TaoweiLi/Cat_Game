class GameArea {
  constructor(gameCanvas, catName) {
    this.canvas = gameCanvas
    this.catName = catName;

    this.cat = new Cat(this.catName, 55, 55, 80, this.canvas.height);
    this.obstacles = [];
    this.score = new ScoreBar(100, 100, 100, 100);

  
    this.canvasContext = this.canvas.getContext("2d");

    this.frameNo = 0;  //start with frame 0

    // only need set up once
    this.interval = setInterval(this.update.bind(this), 5); // (1000/20)=50 frames per second
    document.addEventListener('keydown', (event) => {
      let code = event.code;
      if (code == "Space" && this.cat.hitBottom(this.canvas.height) && !this.cat.isGameOver) {
        this.cat.meowSound();
        this.cat.quickJump(600);   //600(0.6 sec) the time interval btw start jump and start fall
            }
    }, false);
  }

  clear() {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  restartGame(catName) {
    this.catName = catName;
    this.clear();
    this.cat = new Cat(this.catName, 55, 55, 80, this.canvas.height);
    this.obstacles = [];
    this.score = new ScoreBar(100, 100, 600, 200);

    this.canvasContext = this.canvas.getContext("2d");

    this.frameNo = 0;  //start with frme
  }

  gameOver() {  //need to implement
    this.restartGame();
  } 

  update() {

    // check if the cat hits any obstacle on the screen.
    for (let i = 0; i < this.obstacles.length; i += 1) {
      if (this.cat.isHit(this.obstacles[i])) {
        this.cat.gameOver();
      }
    }

    this.clear();
    this.frameNo += 1;

    // add an obstacle at the first frame and then add an obstacle every 150 frames(3 sec)
    if ((this.frameNo === 1 || this.everyinterval(400)) && !this.cat.isGameOver) {
      let canvasWidth = this.canvas.width;
      let canvasHeight = this.canvas.height;
      this.obstacles.push(new Obstacle(canvasWidth, canvasHeight));
    }

    // move obstacles if the game is not over
    for (let i = 0; i < this.obstacles.length; i += 1) {
      if (!this.cat.isGameOver) {  
        this.obstacles[i].x += -1; // move to left with 1 px.
      }
      
      this.obstacles[i].render(this.canvasContext); // draw a updated obstacle on the canvas.
    }

    // delete obstacle when its right side moved out of the canvas.
    this.obstacles = this.obstacles.filter((el) => el.x > -1 * el.width)

    this.cat.newPosition(this.canvas.height);
    this.cat.render(this.canvasContext);
    // myBox.update();

    if (this.everyinterval(10) && !this.cat.isGameOver) {
      this.score.increseScroe(1);
    }
    
    this.score.render(this.canvasContext);

  }

  // 
  everyinterval(n) {
    return this.frameNo % n === 0;
  }
}
