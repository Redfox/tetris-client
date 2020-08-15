import { Canvas2D } from '../canvas';

export class Board {
  private canvas: Canvas2D;

  private columns = 10;

  private rows: number;

  private board: Array<Array<{ filled: boolean}>>;

  private size: number;

  private x = 3;

  private y = 3;

  constructor() {
    this.canvas = new Canvas2D();
    this.rows = this.canvas.height / (this.canvas.width / this.columns);
    this.size = (this.canvas.width / this.columns);
    this.board = [];

    this.createBoard();
  }

  public renderTiles(): void {
    this.canvas.fillStyle = 'red';
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[row].length; col++) {
        if (this.board[row][col].filled) {
          this.canvas.fillRect(this.size * col, this.size * row, this.size - 1, this.size - 1);
        }
      }
    }
  }

  public tiles(): void {
    if (this.y < 19) {
      this.canvas.strokeStyle = '#FFFF';
      this.canvas.strokeRect(this.size * this.x, this.size * 19, this.size - 0.2, this.size - 0.2);
      this.canvas.strokeRect(
        this.size * (this.x + 1),
        this.size * (19 - 1),
        this.size - 0.2,
        this.size - 0.2,
      );
      this.canvas.strokeRect(
        this.size * (this.x + 1),
        this.size * 19, this.size - 0.2,
        this.size - 0.2,
      );
      this.canvas.strokeRect(
        this.size * (this.x + 2),
        this.size * 19,
        this.size - 0.2,
        this.size - 0.2,
      );
    }

    this.canvas.fillStyle = '#e3213b';
    this.canvas.fillRect(this.size * this.x, this.size * this.y, this.size - 0.2, this.size - 0.2);
    this.canvas.fillRect(
      this.size * (this.x + 1),
      this.size * (this.y - 1),
      this.size - 0.2, this.size - 0.2,
    );
    this.canvas.fillRect(
      this.size * (this.x + 1),
      this.size * this.y,
      this.size - 0.2,
      this.size - 0.2,
    );
    this.canvas.fillRect(
      this.size * (this.x + 2),
      this.size * this.y,
      this.size - 0.2,
      this.size - 0.2,
    );
  }

  private createBoard(): void {
    this.canvas.fillStyle = '#000000';
    this.canvas.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.canvas.fillStyle = '#2e2e2e';
    for (let col = 0; col < this.columns; col++) {
      for (let row = 0; row < this.rows; row++) {
        this.canvas.fillRect(this.size * col, this.size * row, this.size - 1, this.size - 1);
        const filled = row > 18 ? Math.random() >= 0.5 : false;
        if (!this.board[row]) {
          this.board.push([{ filled }]);
        } else {
          this.board[row][col] = { filled };
        }
      }
    }
  }
}
