
class Obstacle extends Component {
  static minHeight = 5
  static maxHeight = 10
  static minGap = 50
  static maxGap = 200

  static assets = [
    {
      'urlPath' : "",
      'xOffset' : 0,
      "yOffset" : 0
    }
  ]

  constructor(color, width, height, x, y) {
    super(width, height, x, y);
    this.color = color;
    let random = Math.floor(Math.random() * Obstacle.assets.length);
    this.asset = Obstacle.assets[random]
    this.image = new Image();
    this.image.src = this.asset["urlPath"]
  }

  render(context) {
    // context.fillStyle = this.color;
    // context.fillRect(this.x, this.y, this.width, this.height);
    canvas.drawImage(this.currentGif.image, this.x - 15, this.y - 23);
    canvas.strokeRect(this.x, this.y, this.width, this.height); // for debug
  }
}