class HealthBar extends Component {
  constructor(width, height, x, y) {
    super(width, height, x, y);
    this.hp = 1;
  }

  render(canvasContext) {
    canvasContext.font = '30px Comic Sans MS, Comic Sans';
    canvasContext.fillStyle = '#1399D2';
    let scoreText = "HP: " + this.hp;
    canvasContext.fillText(scoreText, this.x, this.y);
  }
}