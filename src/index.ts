import { Game } from './game';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');
if (!context) throw new Error('Error');

const game = new Game(canvas.width, canvas.height, context);
game.init();
