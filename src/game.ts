import { Board } from './board';

export class Game {
  private board = new Board();

  constructor() {
    this.board = new Board();
  }

  public init(): void {
    this.loop();
  }

  private loop(): void {
    requestAnimationFrame(() => {
      this.board.renderTiles();
      this.loop();
    });
  }
}
