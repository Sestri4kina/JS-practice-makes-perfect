let fs = require('fs');

function alphabetCake(rows, cols, arr) {

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (arr[i][j] === '?') {
        //left
        if ( j-1>=0 && arr[i][j-1] !== '?') {
          if (i-1>=0 && arr[i-1][j-1] !== arr[i][j-1]){ arr[i][j] = arr[i][j-1]; }
          else if (i-1<0) { arr[i][j] = arr[i][j-1]; }
        }
        //right
        else if ( j+1<cols && arr[i][j+1] !== '?') {
          if ( i-1>=0 && arr[i-1][j+1] !== arr[i][j+1]) {arr[i][j] = arr[i][j+1];}
          else if ( i-1<0) {arr[i][j] = arr[i][j+1];}
        }
        //top
        else if ( i-1>=0 && arr[i-1][j] !== '?') {
          if ( j-1>=0 && j+1<cols && arr[i-1][j] !== arr[i-1][j-1] && arr[i-1][j] !== arr[i-1][j+1]) {arr[i][j] = arr[i-1][j];}
          else if ( j-1>=0 && j+1>=cols && arr[i-1][j] !== arr[i-1][j-1]) {arr[i][j] = arr[i-1][j];}
          else if ( j+1<cols && j-1<0 && arr[i-1][j] !== arr[i-1][j+1]) {arr[i][j] = arr[i-1][j];}
        }
        //bottom
        else if ( i+1<rows && arr[i+1][j] !== '?') {
          if ( j-1>=0 && j+1<cols && arr[i+1][j] !== arr[i+1][j-1] && arr[i+1][j] !== arr[i+1][j+1]) {arr[i][j] = arr[i+1][j];}
          else if (j-1>=0 && j+1>=cols && arr[i+1][j] !== arr[i+1][j-1]) {arr[i][j] = arr[i+1][j];}
          else if (j+1<cols && j-1<0 && arr[i+1][j] !== arr[i+1][j+1]) {arr[i][j] = arr[i+1][j];}
        }
      }
    }
  }
  return arr;
}

let someInput = fs.readFileSync('./mockup.txt', 'utf8'),
  data = someInput.split(/\r?\n/),
  testCases = +data[0],
  cases = data.slice(1),
  result = '';

for (let i = 0; i < testCases; i++) {
  let grid = cases.shift().split(' '), rows = +grid[0], cols = +grid[1],
    arr = [];
  for (let j = 0; j < rows; j++) {
    let row = cases.shift();
    arr.push(row);
  }

arr = arr.map(x => x.split(''));

  let cake = alphabetCake(rows, cols, arr),
    solution = `Case #${i+1}:
`;

  for (let j = 0; j < rows; j++) {
    solution += `${cake[j].join(' ')}
`;
  }
  result +=solution;
  console.log(solution);
}

//fs.writeFileSync('./mockup-output.txt', result);
