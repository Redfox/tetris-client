import { Board } from './board';

export class Game {
  private board = new Board();

  constructor() {
    this.board = new Board();
  }

  public init(): void {
    this.loop();

    // document.addEventListener('keypress', (key) => {
    //   if (key.key === 'a' && this.x > 0) {
    //     this.x -= 1;
    //   } else if (key.key === 'd' && this.x < 9) {
    //     this.x += 1;
    //   } else if (key.key === 's' && this.y < 19) {
    //     this.y += 1;
    //   }
    // });
  }

  private loop(): void {
    requestAnimationFrame(() => {
      this.board.renderTiles();
      this.loop();
    });
  }
}
