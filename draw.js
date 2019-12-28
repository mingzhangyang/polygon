let canvas = document.getElementById("canvas");
canvas.style.width = "400px";
canvas.style.height = "400px";
let r = window.devicePixelRatio;
canvas.width = 400 * r;
canvas.height = 400 * r;
let ctx = canvas.getContext("2d");
ctx.scale(r, r);
ctx.translate(200, 200);
ctx.lineWidth = 4;
ctx.strokeStyle = "#f66";
ctx.beginPath();
ctx.moveTo(160, 0);
for (let i = 1; i < 10; i++) {
  ctx.rotate(Math.PI / 5);
  ctx.lineTo(160, 0);
}
ctx.closePath();
ctx.stroke();
