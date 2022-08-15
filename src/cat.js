const cat1_run_path = "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cat03_run_12fps.gif";
const cat1_die_path = "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cat03_die_12fps.gif";
const cat2_run_path = "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cat04_run_12fps.gif";
const cat2_die_path = "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cat04_die_12fps.gif";
const cat3_run_path = "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cat05_run_12fps.gif";
const cat3_die_path = "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cat05_die_12fps.gif";


class Cat extends Component {
  constructor(color, width, height, x, y) {
    super(width, height, x, y);
    this.health = 3;
    this.color = color;
    this.speedX = 0;
    this.speedY = 0;  
    this.gravity = 3;  //incremental rate
    this.gravitySpeed = 0; //current up/down speed
    // this.isJump = false;  //can use it to make double/triple jump!
    this.canvasHeight = y;
    this.isGameOver = false;

    // Load cat gif resources
    this.cat1_run_gif = GIF();
    this.cat1_run_gif.load(cat1_run_path);

    this.cat1_die_gif = GIF();
    this.cat1_die_gif.load(cat1_die_path);

    this.currentGif = this.cat1_run_gif;
  }

  render(canvasContext) {   //draw cat pic
    // canvasContext.fillStyle = this.color;
    // canvasContext.fillRect(this.x, this.y, this.width, this.height);
    canvasContext.drawImage(this.currentGif.image, this.x - 15, this.y - 23);
    // canvasContext.drawImage(this.)
    // canvasContext.strokeRect(this.x, this.y, this.width, this.height); // for debug
  }

  meowSound() {
    let audio = new Audio('http://soundbible.com/grab.php?id=1286&type=mp3');
    if (soundOn) {
      audio.play();
    }
  }

  hitSound() {
    let audio = new Audio('http://soundbible.com/grab.php?id=995&type=mp3');
     if (soundOn) {
      audio.play();
    }
  }
  
  quickJump(interval) {  //only aloowed jump once at a time.
    if (this.hitBottom(this.canvasHeight)) {
      this.jump()
      setTimeout(this.fall.bind(this), interval);
    } 
  }

  jump() {
    if (this.hitBottom(this.canvasHeight)) {
      this.gravity = -1 * this.gravity;  //reversed gravity make jump
      // this.isJump = true;
    }
  }

  fall() {
    if (!this.hitBottom(this.canvasHeight)) {
      this.gravity = Math.abs(this.gravity);  //positive gravity make fall
      // this.isJump = false;
    }
  }

  newPosition(canvasHeight) {
    this.gravitySpeed = this.gravity;  // 匀速上下
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom(canvasHeight);
  }
  
  hitBottom(canvasHeight) {
    let catBottom = this.y + this.height;
    if (catBottom >= canvasHeight) {
      this.y = canvasHeight - this.height;;
      this.gravitySpeed = 0;
      return true
    }
    return false
  }

  hitTop() {

  }

  gameOver() {
    if(!this.isGameOver){
      this.hitSound();
      this.currentGif = this.cat1_die_gif;
      this.isGameOver = true;
    }
  }
}
