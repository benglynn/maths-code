let step = 1;
let nMinusTwo = -1;
let nMinusOne = 1;
let limit = 1_000;

const formatter = Intl.NumberFormat("en", { notation: "standard" });

while (step <= limit) {
  const n = nMinusTwo + nMinusOne;
  nMinusTwo = nMinusOne;
  nMinusOne = n;
  // console.log(`Step ${step}: ${n.toLocaleString()}\n`);
  console.log(`Step ${step}: ${formatter.format(n)}\n`);
  step = step + 1;
}
