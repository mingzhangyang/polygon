const names = {
  2: "digon",
  3: "triangle (trigon)",
  4: "quadrilateral (tetragon)",
  5: "pentagon",
  6: "hexagon",
  7: "heptagon",
  8: "octagon",
  9: "nonagon (enneagon)",
  10: "decagon",
  11: "hendecagon (undecagon)",
  12: "dodecagon",
  13: "tridecagon (triskaidecagon)",
  14: "tetradecagon (tetrakaidecagon)",
  15: "pentadecagon (pentakaidecagon)",
  16: "hexadecagon (hexakaidecagon)",
  17: "heptadecagon (heptakaidecagon)",
  18: "octadecagon (octakaidecagon)",
  19: "enneadecagon (enneakaidecagon)",
  20: "icosagon",
  30: "triacontagon",
  40: "tetracontagon",
  50: "pentacontagon",
  60: "hexacontagon",
  70: "heptacontagon",
  80: "octacontagon",
  90: "enneacontagon",
  100: "hectogon",
  10000: "myriagon"
};

const defaultOpts = {
  n: 10,
  lineWidth: 4,
  lineColor: "#f66",
  fillColor: "transparent",
};

function draw(opts = defaultOpts) {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let w = window.innerWidth;
  let h = window.innerHeight;
  w = w > h ? h : w;
  w = .8 * w;
  let r = window.devicePixelRatio;
  canvas.devicePixelRatio = r;
  canvas.width = w * r;
  canvas.height = w * r;
  canvas.style.width = w + 'px';
  canvas.style.height = w + 'px';

  ctx.save();
  ctx.scale(r, r);
  ctx.translate(w / 2, w / 2);
  ctx.lineWidth = opts.lineWidth;
  ctx.strokeStyle = opts.lineColor;
  ctx.beginPath();
  let l = .4 * w;
  let alpha = Math.PI * 2 / opts.n;
  ctx.moveTo(l, 0);
  for (let i = 1; i < opts.n; i++) {
    ctx.rotate(alpha);
    ctx.lineTo(l, 0);
  }
  ctx.closePath();
  ctx.fillStyle = opts.fillColor;
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  if (names[opts.n]) {
    ctx.save();
    ctx.fillStyle = "#222";
    ctx.font = "24px Arial";
    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";
    ctx.fillText(names[opts.n] + '', w - 2, w - 2);
    ctx.restore();
  }
}

function setForUpdate() {
  let inps = document.getElementsByTagName("input");
  for (let inp of inps) {
    inp.addEventListener('change', () => {
      let n = +document.getElementById("number-of-sides").value;
      let lw = +document.getElementById("line-width").value;
      let lc = document.getElementById("line-color").value;
      let fc = document.getElementById("fill-color").value;

      if (isNaN(n) || n < 3 || n > 10001) {
        alert("Invalid number of sides.");
        return;
      }

      if (isNaN(lw) || lw < 0 || lw > 100) {
        alert("Invalid value for line width");
      }

      draw({
        n: n,
        lineWidth: lw,
        lineColor: lc,
        fillColor: fc,
      });
    });
  }
}

window.onload = function main() {
  draw();
  let canvas = document.getElementById("canvas");
  canvas.addEventListener("mouseenter", () => {
    if (window.devicePixelRatio !== canvas.devicePixelRatio) {
      draw();
    }
  });
  setForUpdate();
};
