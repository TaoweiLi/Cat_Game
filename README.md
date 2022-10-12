# **Cat Jump**


## **Gameplay**
<img src="https://github.com/TaoweiLi/Cat_Game/raw/main/asset/game-play-record.gif" width="500" height="300">

## **Description**

Cat game is a jumping game for a single player to make a cat jump. There will be different cats that can be chosen to play with. Players can press Space to make the cat jump and avoid obstacles to achieve a higher score. Each time the cat hits the obstacles it will reduce 1 health point. Game will end if the health point is equal to 0.

## **Usage**
No installation needed. Please open this link (https://taoweili.github.io/Cat_Game/) to play the game online.

## **Features**

- Press Space to jump the cat over the obstacles to achieve a higher score.
- See the live score and health points.
- Sound on/off by clicking the sound button.
- Three cat options can be chosen to play with.
- Restart game anytime by clicking the restart buttton.
- View the top 10 scores.

<img src="https://github.com/TaoweiLi/Cat_Game/raw/main/asset/feature-record.gif" width="500" height="300">

```
 constructor(name, width, height, x, y) {
    super(width, height, x, y);
    this.name = name;
    this.speedX = 0;
    this.speedY = 0;  
    this.gravity = 4;  //incremental rate, cat's jump height
    this.gravitySpeed = 0;  //current up&down speed
    this.canvasHeight = y;
    this.isGameOver = false;
    this.renderRatio = 5;

  // draw cat pic
  render(canvasContext) {
    let cImg = this.currentGif.image;
    if (cImg !== null) {
          canvasContext.drawImage(cImg, this.x - cImg.width*1.7, this.y - cImg.height*2.8, cImg.width * this.renderRatio, cImg.height * this.renderRatio);
    }
  }
  
  // negative gravity make jump
  jump() {
    if (this.hitBottom(this.canvasHeight)) {
      this.gravity = -1 * this.gravity;
    }
  }

  // positive gravity make fall
  fall() {
    if (!this.hitBottom(this.canvasHeight)) {
      this.gravity = Math.abs(this.gravity);
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
```

## **Technologies, Libraries, APIs**

​​This project was implemented with the following technologies:
- Canvas library
- JavaScript
- HTML
- CSS
- GIF


