export class Game {
  private context: CanvasRenderingContext2D;

  private width: number;

  private height: number;

  private x!: number;

  private y!: number;

  constructor(
    width: number,
    height: number,
    context: CanvasRenderingContext2D,
  ) {
    this.width = width;
    this.height = height;
    this.context = context;
  }

  public init(): void {
    this.renderBoard();
    this.x = 0;
    this.y = 0;

    setInterval(() => this.loop(), 500);
  }

  private draw(): void {
    this.context.clearRect(0, 0, this.width, this.height);
    this.renderBoard();

    const columns = 10;
    const w = this.width / columns;

    this.context.fillStyle = '#e3213b';
    this.context.fillRect(w * this.x, w * this.y, w - 0.2, w - 0.2);
    this.context.fillRect(w * (this.x + 1), w * (this.y - 1), w - 0.2, w - 0.2);
    this.context.fillRect(w * (this.x + 1), w * this.y, w - 0.2, w - 0.2);
    this.context.fillRect(w * (this.x + 2), w * this.y, w - 0.2, w - 0.2);
  }

  private renderBoard(): void {
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.width, this.height);

    const columns = 10;
    const w = this.width / columns;
    const rows = this.height / w;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < rows; j++) {
        this.context.fillStyle = '#2e2e2e';
        this.context.fillRect(w * i, w * j, w - 0.2, w - 0.2);
      }
    }
  }

  private update(): void {
    if (this.y < 19) this.y += 1;
  }

  private roundRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) {
    // if (width < 2 * radius) radius = width / 2;
    // if (height < 2 * radius) radius = height / 2;
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

  private loop(): void {
    requestAnimationFrame(() => {
      this.update();
      this.draw();
    });
  }
}
