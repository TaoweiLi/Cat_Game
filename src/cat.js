const cat1_run_path = "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cat03_run_12fps.gif";
const cat1_die_path = "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cat03_die_12fps.gif";
const cat2_run_path = "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cat04_run_12fps.gif";
const cat2_die_path = "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cat04_die_12fps.gif";
const cat3_run_path = "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cat05_run_12fps.gif";
const cat3_die_path = "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cat05_die_12fps.gif";


class Cat extends Component {

  static assetsHash = {
    'cat1': {
      'cat_run_path': cat1_run_path,
      'cat_die_path': cat1_die_path
    }
    ,

    'cat2': {
      'cat_run_path': cat2_run_path,
      'cat_die_path': cat2_die_path
    }
    ,

    'cat3': {
      'cat_run_path': cat3_run_path,
      'cat_die_path': cat3_die_path
    }
  }

  constructor(name, width, height, x, y) {
    super(width, height, x, y);
    this.name = name;
    this.speedX = 0;
    this.speedY = 0;  
    this.gravity = 4;  //incremental rate, cat's jump height
    this.gravitySpeed = 0;  //current up/down speed
    // this.isJump = false;  //can use it to make double/triple jump!
    this.canvasHeight = y;
    this.isGameOver = false;
    this.renderRatio = 5;

    // Load cat gif resources
    let catAsset = Cat.assetsHash[String(name)]

    // default cat
    if (catAsset === null || catAsset === undefined){
      catAsset = Cat.assetsHash['cat1']
    }

    this.cat1_run_gif = GIF();
    this.cat1_run_gif.load(catAsset["cat_run_path"]);

    this.cat1_die_gif = GIF();
    this.cat1_die_gif.load(catAsset["cat_die_path"])

    this.currentGif = this.cat1_run_gif;
  }

 // draw cat pic
  render(canvasContext) {
    // canvasContext.fillStyle = this.color;
    // canvasContext.fillRect(this.x, this.y, this.width, this.height);
    let cImg = this.currentGif.image;
    if (cImg !== null) {
          canvasContext.drawImage(cImg, this.x - cImg.width*1.7, this.y - cImg.height*2.8, cImg.width * this.renderRatio, cImg.height * this.renderRatio);
    }
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
    this.gravitySpeed = this.gravity;  // constant velocity
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

  // hitTop() {

  // }

  gameOver() {
    if(!this.isGameOver){
      // this.hitSound();
      this.currentGif = this.cat1_die_gif;
      this.isGameOver = true;
    }
  }
}
