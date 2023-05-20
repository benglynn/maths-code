const svgNs = "http://www.w3.org/2000/svg";

const svgEl = (name, attrs) => {
  const el = document.createElementNS(svgNs, name);
  Object.entries(attrs).map(([name, value]) => {
    el.setAttributeNS(null, name, value);
  });
  return el;
};

const grid = 4;

const square = { rx: 2, ry: 2, class: "rect" };

const svg = document.body.appendChild(svgEl("svg", { class: "svg" }));

let step = 0;
let nMinusTwo = 1;
let nMinusOne = 0;
let limit = 16;

let x = 800;
let y = 200;

while (step <= limit) {
  const n = nMinusTwo + nMinusOne;
  console.log(
    `Step ${step}: ${n.toLocaleString()} (${["N", "E", "S", "W"][step % 4]}])\n`
  );

  const width = n * grid;
  const height = n * grid;

  // advance position

  switch (step % 4) {
    case 0: // north
      y -= n * grid;
      break;
    case 1: // east
      x += nMinusOne * grid;
      break;
    case 2: // south
      x -= nMinusTwo * grid;
      y += nMinusOne * grid;
      break;
    case 3: // west
      x -= n * grid;
      y -= nMinusTwo * grid;
      break;
  }

  // draw it

  svg.appendChild(svgEl("rect", { x, y, width, height, ...square }));

  // next iteration

  nMinusTwo = nMinusOne;
  nMinusOne = n;
  step += 1;
}
