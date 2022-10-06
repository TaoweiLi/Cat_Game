class HealthBar extends Component {
  constructor(width, height, x, y) {
    super(width, height, x, y);
    this.hp = 3;
  }

  render(canvasContext) {
    canvasContext.font = '30px "Nunito", sans-serif';
    canvasContext.fillStyle = '#1399D2';
    let scoreText = "HP: " + this.hp;
    canvasContext.fillText(scoreText, this.x, this.y);
  }
}