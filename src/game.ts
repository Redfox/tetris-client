export class Game {
  private canvas = document.getElementById("canvas") as HTMLCanvasElement;
  private context = this.canvas.getContext("2d");

  public init(): void {
    this.renderBoard();
  }

  private renderBoard() {
    if (!this.context) throw new Error("Error");
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const columns = 10;
    const w = this.canvas.width / columns;
    const rows = this.canvas.height / w;

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < rows; j++) {
        this.context.fillStyle = "#2e2e2e";
        this.context.fillRect(w * i, w * j, w - 0.2, w - 0.2);
      }
    }
  }
}
