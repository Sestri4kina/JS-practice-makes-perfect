let fs = require('fs');

//isTidyNumber takes input as a string
function isTidyNumber(num) {
  if (num.length === 1) return true;
  return num.split('').map(x => +x)
  .every((x, i, arr) => {
    if (i !== arr.length-1 && arr[i+1] - x >= 0 ) return true;
    else if (i === arr.length-1 && x - arr[i-1] >= 0 ) return true;
    else return false;
  });
}

//getTidyNumbers takes input as a string
function getTidyNumbers(N) {
  if (isTidyNumber(N)) return N;
  let limit = N.length,
      arr = N.split('').map(x => +x);

  for (let i = 0; i < limit; i++) {
    let ind = limit - i - 1;
    arr[ind] = 9;

    let j = ind-1;
    while (j >= 0) {
      if (arr[j] === 0) {arr[j] = 9;}
      else {arr[j] -= 1; break;}
      j--;
    }

    let newN = arr.join('');
    if (newN.startsWith('0')) newN = newN.slice(1);
    if (isTidyNumber(newN)) return newN;
  }
}

let someInput = fs.readFileSync('./B-large.in', 'utf8'),
  data = someInput.split(/\r?\n/),
  testCases = +data[0],
  cases = data.slice(1),
  result = '';

for (let i = 0; i < testCases; i++) {
  let solution = `Case #${i+1}: ${getTidyNumbers(cases[i])}
`;
  result +=solution;
}

fs.writeFileSync('./B-large-output.txt', result);
