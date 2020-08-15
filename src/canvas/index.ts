export class Canvas2D {
  private canvas: HTMLCanvasElement;

  private context: CanvasRenderingContext2D;

  public fillStyle = '#00000';

  public strokeStyle = '#00000';

  public width: number;

  public height: number;

  constructor() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Error on get context from canvas');

    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.context = ctx;
  }

  public fillRect(x: number, y: number, w: number, h: number): void {
    this.context.fillStyle = this.fillStyle;
    this.context.fillRect(x, y, w, h);
  }

  public strokeRect(x: number, y: number, w: number, h: number): void {
    this.context.strokeStyle = this.strokeStyle;
    this.context.strokeRect(x, y, w, h);
  }
}
