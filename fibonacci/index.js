const svgNs = "http://www.w3.org/2000/svg";

const svgEl = (name, attrs) => {
  const el = document.createElementNS(svgNs, name);
  Object.entries(attrs).map(([name, value]) => {
    el.setAttributeNS(null, name, value);
  });
  return el;
};

const grid = 10;

const square = { rx: 2, ry: 2, class: "rect" };

const svg = document.body.appendChild(svgEl("svg", { class: "svg" }));

let step = 0;
let nMinusTwo = 1;
let nMinusOne = 0;
let limit = 4;

while (step <= limit) {
  const n = nMinusTwo + nMinusOne;
  console.log(`Step ${step}: ${n.toLocaleString()}\n`);

  const x = grid + step * grid;
  const y = grid + step * grid;
  const width = n * grid;
  const height = n * grid;
  svg.appendChild(svgEl("rect", { x, y, width, height, ...square }));

  nMinusTwo = nMinusOne;
  nMinusOne = n;
  step += 1;
}
