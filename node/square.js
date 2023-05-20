let step = 1;
let limit = 1_000_000_000;
const pow = 2;

while (step <= limit) {
  console.log(
    `${step.toLocaleString()} to the power of ${pow}: ${Math.pow(
      step,
      pow
    ).toLocaleString()}`
  );
  step = step + 1;
}
