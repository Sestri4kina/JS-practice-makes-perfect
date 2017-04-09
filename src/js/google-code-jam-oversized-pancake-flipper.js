let fs = require('fs');

function flip(str) {
  return str.split('')
    .map(x => {return x === '+' ? x = '-' : x = '+';})
    .join('');
}

function flipPancakes(str, k) {
  if (str.indexOf('-') === -1) return 0;
  let counter = 0;
  for (;;) {
    let ind = str.indexOf('-');
    if (ind + k > str.length) return 'IMPOSSIBLE';
    str = str.slice(0, ind) + flip(str.slice(ind, ind+k)) + str.slice(ind+k);
    counter++;
    if (str.indexOf('-') === -1) return counter;
  }
}

let smallInput = fs.readFileSync('./A-large.in', 'utf8'),
  data = smallInput.split(/\r?\n/),
  testCases = +data[0],
  cases = data.slice(1).map(line => line.split(' ')),
  result = '';

for (let i = 0; i < testCases; i++) {
  let solution = `Case #${i+1}: ${flipPancakes(cases[i][0], +cases[i][1])}
`;
  result +=solution;
}

fs.writeFileSync('./A-large-output.txt', result);
