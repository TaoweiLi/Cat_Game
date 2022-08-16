class ScoreBar extends Component {
  constructor(width, height, x, y) {
    super(width, height, x, y);
    this.score = 0;
  }

  render(canvasContext) {

    canvasContext.font = '30px arial';
    canvasContext.fillStyle = '#1399D2';
      let scoreText = "Score: " + this.score;
      canvasContext.fillText(scoreText, this.x, this.y);

  }

  increseScroe(num) {
    this.score += num;
  }
}