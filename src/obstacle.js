
class Obstacle extends Component {
  static minHeight = 5
  static maxHeight = 10
  static minGap = 50
  static maxGap = 200


  constructor(color, width, height, x, y) {
    super(width, height, x, y);
    this.color = color;
    
  }

  render(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}