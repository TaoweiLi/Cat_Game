class ScoreBar extends Component {
  constructor(width, height, x, y) {
    super(width, height, x, y);
    this.score = 0;
  }

  render(canvasContext) {

    canvasContext.font = 'bold 50px arial';
      // canvasContext.fillStyle = color;
      let scoreText = "SCORE: " + this.score;
      canvasContext.fillText(scoreText, this.x, this.y);

  }

  increseScroe(num) {
    this.score += num;
  }
}