const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");

if (!context) throw new Error("Error");

context.fillStyle = "#00000";
context.fillRect(0, 0, 150, 75);
