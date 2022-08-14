class Cat extends Component {
  constructor(color, width, height, x, y) {
    super(width, height, x, y);
    this.health = 3;
    this.color = color;
    this.speedX = 0;
    this.speedY = 0;  
    this.gravity = 3;
    this.gravitySpeed = 0;
    this.isJump = false;
    this.canvasHeight = y 

    this.cat_run_gif = GIF()
    this.cat_run_gif.load(cat_run_path)
  }

  render(canvas) {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }

  meow() {
    var audio = new Audio('http://soundbible.com/grab.php?id=1286&type=mp3');
    audio.play();
  }

  quickJump(interval) {
    if (this.hitBottom(this.canvasHeight)) {
      this.jump()
      setTimeout(this.fall.bind(this), interval);
    }
  }

  jump() {
    if (this.hitBottom(this.canvasHeight)) {
      this.gravity = -1 * this.gravity;
      this.isJump = true;
    }
  }

  fall() {
    if (!this.hitBottom(this.canvasHeight)) {
      this.gravity = Math.abs(this.gravity);
      this.isJump = false;
    }
  }

  newPosition(canvasHeight) {
    this.gravitySpeed = this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom(canvasHeight);
  }
  
  hitBottom(canvasHeight) {
    var rockbottom = canvasHeight - this.height;
    if (this.y >= rockbottom) {
      this.y = rockbottom;
      this.gravitySpeed = 0;
      return true
    }
    return false
  }

  hitTop() {

  }

  gameOver() {

  }
}

const cat_run_path = "/Users/taoweili/workspace/Bootcamp/taowei_li_AAClasswork/Cat_Game_Final_Proposal/asset/catset_assets/catset_gifs/cat01_gifs/cat01_run_12fps.gif"