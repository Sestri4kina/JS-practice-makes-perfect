let fs = require('fs');

function isTidyNumber(num) {
  if (num.toString().length === 1) return true;
  return num.toString().split('').map(x => +x)
  .every((x, i, arr) => { return arr[i+1] - x >= 0 || x - arr[i-1] >= 0 });
}

function getTidyNumbers(N) {
  for (let i = N; i > 0; i--) {
    if (isTidyNumber(i)) return i;
  }
}

let someInput = fs.readFileSync('./B-small-attempt0.in', 'utf8'),
  data = someInput.split(/\r?\n/),
  testCases = +data[0],
  cases = data.slice(1).map(x => +x),
  result = '';

for (let i = 0; i < testCases; i++) {
  let solution = `Case #${i+1}: ${getTidyNumbers(cases[i])}
`;
  result +=solution;
}

fs.writeFileSync('./B-small-output.txt', result);
