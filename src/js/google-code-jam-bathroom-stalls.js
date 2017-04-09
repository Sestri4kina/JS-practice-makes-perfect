let fs = require('fs');

function buildArr(num) {
  if (num % 2 === 0) {
    return [num/2, num/2 - 1];
  } else {
    return [Math.round(num/2) - 1, Math.round(num/2) - 1];
  }
}

function bathroomStalls(stalls, people) {
  if (stalls === people) return [0,0];
  let power = Math.trunc(Math.log(stalls)/Math.LN2);
  if (people > Math.pow(2, power)) return [0,0];
  let arr = [];
  arr.push(buildArr(stalls));
  let limit = Math.trunc(Math.log(people)/Math.LN2);
  for (let i = 0; i < limit; i++) {
    let len = arr.length,
      row = Math.pow(2,i);
    for (let j = 0; j < row; j++) {
      let ind = len - row + j;
      if (arr[ind][0] !== 0) {arr.push(buildArr(arr[ind][0]));}
      if (arr[ind][1] !== 0) {arr.push(buildArr(arr[ind][1]));}
    }
  }
  arr.sort((a, b) => {
    if (a[0] >= b[0] && a[1] >= b[1]) {return -1;}
    if (a[0] <= b[0] || a[1] <= b[1]) {return 1;}
    return 0;
  });
  return arr[people-1];
}

let someInput = fs.readFileSync('./C-small-2-attempt1.in', 'utf8'),
  data = someInput.split(/\r?\n/),
  testCases = +data[0],
  cases = data.slice(1).map(x => x.split(' ')),
  result = '';

for (let i = 0; i < testCases; i++) {
  let interim = bathroomStalls(+cases[i][0], +cases[i][1]),
    max = interim[0], min = interim[1],
    solution = `Case #${i+1}: ${max} ${min}
`;
  result +=solution;
}

fs.writeFileSync('./C-small-2-output.txt', result);
