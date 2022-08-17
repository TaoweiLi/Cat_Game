
class CanvasButton extends Component {
  constructor(width, height, x, y, gameArea) {
    super(width, height, x, y);
    this.isEnable = false;
    this.gameArea = gameArea;
  }

  isInside(pos) {
    return this.isEnable  && pos.x > this.x && pos.x < this.x + this.width && pos.y < this.y + this.height && pos.y > this.y
  }

  render(canvasContext) {
    if(this.isEnable){
      canvasContext.strokeRect(this.x, this.y, this.width, this.height);
    }
  }

  enable() { 
    this.isEnable = true
  }

  disable() {
    this.isEnable = false
  }

  onClick(){
    this.gameArea.restartGame()
  }
}
