
class Obstacle extends Component {
  static minHeight = 5
  static maxHeight = 10
  static minGap = 50
  static maxGap = 200

  static assets = [
    {
      'urlPath': "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/cherry.png",
      'width' : 70,  //square size
      'height': 100,
      'xOffset': 45, 
      'yOffset': 70,
      'displayRatio' : 1.5 //obstacles size
    }
    ,
    {
      'urlPath': "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/avocade.png",
      'width': 70,
      'height': 100,
      'xOffset': 55,
      'yOffset': 70,
      'displayRatio': 1.5
    }
    ,
    {
      'urlPath': "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/mango.png",
      'width': 100,
      'height': 80,
      'xOffset': 30,
      'yOffset': 34,
      'displayRatio': 1.5
    }
    ,
    {
      'urlPath': "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/orange.png",
      'width': 100,
      'height': 80,
      'xOffset': 25,
      'yOffset': 70,
      'displayRatio': 1.4
    }
    ,
    {
      'urlPath': "https://raw.githubusercontent.com/TaoweiLi/Cat_Game_Final_Proposal/main/asset/watermelon.png",
      'width': 100,
      'height': 90,
      'xOffset': 45,
      'yOffset': 33,
      'displayRatio': 1.4
    }
  ] 

  constructor(x, canvasHeight, startFrame) {
    let random = Math.floor(Math.random() * Obstacle.assets.length);
    let randomAsset = Obstacle.assets[random];

    super(randomAsset["width"], randomAsset["height"], x, canvasHeight - randomAsset["height"]);

    this.asset = randomAsset;
    this.image = new Image();
    this.image.src = this.asset["urlPath"]
    this.startFrame = startFrame;
  }

  // draw a new obstacle
  render(canvasContext) {
    // canvasContext.fillStyle = this.color;
    // canvasContext.fillRect(this.x, this.y, this.width, this.height);
    canvasContext.drawImage(this.image, this.x - this.asset["xOffset"], this.y - this.asset["yOffset"], this.image.width * this.asset["displayRatio"], this.image.height * this.asset["displayRatio"]);
    // canvasContext.strokeRect(this.x, this.y, this.width, this.height); // for debug
  }
}
