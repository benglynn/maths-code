let step = 1;
let total = 0;
let limit = 1_000_000_000;

while (step <= limit) {
  total = total + step;
  console.log(`Step ${step.toLocaleString()}: ${total.toLocaleString()}`);
  step = step + 1;
}
