import { Canvas2D } from '../canvas';

export class Board {
  private canvas: Canvas2D;

  private columns = 10;

  private rows: number;

  private board: Array<Array<{ filled: boolean}>>;

  private size: number;

  private x = 4;

  private y = 3;

  private side = 0;

  private even: Array<{ x: number, y: number }> = [
    { x: 0, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: +1 },
  ]

  private odd: Array<{ x: number, y: number }> = [
    { x: 0, y: 0 },
    { x: 0, y: -1 },
    { x: -1, y: 0 },
    { x: +1, y: 0 },
  ]

  private tile = this.even;

  constructor() {
    this.canvas = new Canvas2D();
    this.rows = this.canvas.height / (this.canvas.width / this.columns);
    this.size = (this.canvas.width / this.columns);
    this.board = [];

    this.createBoard();

    document.addEventListener('keydown', (key) => {
      if (key.key === 'w') {
        this.side += 1;
      } else if (key.key === 'a' && this.x - 1 > 0) {
        this.x -= 1;
      } else if (key.key === 'd' && this.x < 9) {
        this.x += 1;
      } else if (key.key === 's' && this.y < 20 + Math.min.apply(null, this.tile.map((t) => t.y))) {
        this.y += 1;
      }
    });
  }

  public renderTiles(): void {
    this.canvas.clear();

    const newTilePosition = this.side % 2 === 0 ? this.even : this.odd;
    if (this.x > (9 - Math.max.apply(null, newTilePosition.map((t) => t.x)))) {
      this.x -= Math.max.apply(null, newTilePosition.map((t) => t.x));
    } else if (this.x < (0 - Math.min.apply(null, newTilePosition.map((t) => t.x)))) {
      this.x -= Math.min.apply(null, newTilePosition.map((t) => t.x));
    }

    this.tile = newTilePosition;

    this.canvas.fillStyle = '#000000';
    this.canvas.fillRect(0, 0, this.canvas.width, this.canvas.height);

    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[row].length; col++) {
        this.canvas.fillStyle = this.board[row][col].filled ? '#e3213b' : '#2e2e2e';
        this.canvas.fillRect(this.size * col, this.size * row, this.size - 1, this.size - 1);
      }
    }

    this.tiles();
  }

  public tiles(): void {
    let last = 19;

    for (let row = 19; row >= this.y; row--) {
      this.tile
        // eslint-disable-next-line no-loop-func
        .forEach((d) => {
          if (this.board[row][this.x + d.x].filled) {
            last = (row - (d.y > 0 ? d.y : 0)) - 1;
          }
        });
    }

    if (last === 19) {
      this.tile.map((d) => d.y).forEach((y) => {
        last -= (y > 0 ? y : 0);
      });
    }

    this.canvas.fillStyle = '#e3213b';
    this.tile.forEach((dotTile) => {
      this.canvas.fillRect(
        this.size * (this.x + dotTile.x),
        this.size * (this.y + dotTile.y),
        this.size - 0.2, this.size - 0.2,
      );

      this.canvas.strokeStyle = '#FFFF';
      this.canvas.strokeRect(
        this.size * (this.x + dotTile.x),
        this.size * (last + dotTile.y),
        this.size - 0.2, this.size - 0.2,
      );
    });
  }

  private createBoard(): void {
    this.canvas.fillStyle = '#2e2e2e';
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.columns; col++) {
        const filled = false; // row > 16 ? Math.random() >= 0.5 : false;
        if (!this.board[row]) {
          this.board.push([{ filled }]);
        } else {
          this.board[row][col] = { filled };
        }
      }
    }

    this.board[17][3] = { filled: true };
  }
}
