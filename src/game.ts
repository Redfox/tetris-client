export class Game {
  private context: CanvasRenderingContext2D;
  private width: number;
  private height: number;

  constructor(
    width: number,
    height: number,
    context: CanvasRenderingContext2D
  ) {
    this.width = width;
    this.height = height;
    this.context = context;
  }

  public init(): void {
    this.renderBoard();
  }

  private renderBoard() {
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.width, this.height);

    const columns = 10;
    const w = this.width / columns;
    const rows = this.height / w;

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < rows; j++) {
        this.context.fillStyle = "#2e2e2e";
        this.context.fillRect(w * i, w * j, w - 0.2, w - 0.2);
      }
    }

    this.context.fillStyle = "#e3213b";
    this.context.fillRect(w * 3, w * 3, w - 0.2, w - 0.2);
    this.context.fillRect(w * 3, w * 4, w - 0.2, w - 0.2);
    this.context.fillRect(w * 4, w * 4, w - 0.2, w - 0.2);
    this.context.fillRect(w * 2, w * 4, w - 0.2, w - 0.2);
  }

  private roundRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ) {
    if (!this.context) throw new Error("Error");

    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;
    this.context.beginPath();
    this.context.moveTo(x + radius, y);
    this.context.arcTo(x + width, y, x + width, y + height, radius);
    this.context.arcTo(x + width, y + height, x, y + height, radius);
    this.context.arcTo(x, y + height, x, y, radius);
    this.context.arcTo(x, y, x + width, y, radius);
    this.context.closePath();
    this.context.fill();
    return this;
  }
}
