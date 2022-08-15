
class Obstacle extends Component {
  static minHeight = 5
  static maxHeight = 10
  static minGap = 50
  static maxGap = 200

  static assets = [
    {
      'urlPath': "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/ob1.png",
      'width' : 10,
      'height': 20,
      'xOffset' : 22,
      'yOffset' : 19,
      'displayRatio' : 0.5
    }
,
    {
      'urlPath': "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/book_shelf_1.png",
      'width': 20,
      'height': 15,
      'xOffset': 18,
      'yOffset': 16.5,
      'displayRatio': 0.6
    }
  ]

  constructor(x, canvasHeight) {
    let random = Math.floor(Math.random() * Obstacle.assets.length);
    let randomAsset = Obstacle.assets[random]

    super(randomAsset["width"], randomAsset["height"], x, canvasHeight - randomAsset["height"]);

    this.asset = randomAsset
    this.image = new Image();
    this.image.src = this.asset["urlPath"]
  }

  // draw a new obstacle
  render(canvasContext) {
    // canvasContext.fillStyle = this.color;
    // canvasContext.fillRect(this.x, this.y, this.width, this.height);
    canvasContext.drawImage(this.image, this.x - this.asset["xOffset"], this.y - this.asset["yOffset"], this.image.width * this.asset["displayRatio"], this.image.height * this.asset["displayRatio"]);
    // canvasContext.strokeRect(this.x, this.y, this.width, this.height); // for debug
  }
}