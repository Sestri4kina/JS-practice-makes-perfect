/*
* created by Sestri4kina on 28.03.2017
*
* https://code.google.com/codejam/contest/6254486/dashboard#s=p2
*
Input: The first line of the input gives the number of test cases, T.
T test cases follow; each consists of one line with two integers N and J.

Output: For each test case, output J+1 lines. The first line must consist of
only Case #x:, where x is the test case number (starting from 1).
Each of the last J lines must consist of a jamcoin of length N followed by
nine integers. The i-th of those nine integers (counting starting from 1) must
be a nontrivial divisor of the jamcoin when the jamcoin is interpreted in base i+1.
All of these jamcoins must be different. You cannot submit the same jamcoin
in two different lines, even if you use a different set of divisors each time.

Limits: T = 1. (There will be only one test case.)
It is guaranteed that at least J distinct jamcoins of length N exist.

Small dataset: N = 16, J = 50.
Large dataset: N = 32, J = 500.
*/
function isPrime(num) {
  if (num === 1) return true;
  if (num % 2 === 0) return false;
  let limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function getFirstDivisor(num) {
  if (num % 2 === 0) return 2;
  let limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return i;
  }
}

function buildStr(len) {
  let arr = ['0', '1'];
  for (let j = 1; j < len-2; j++) {
    let limit = Math.pow(2, j);
    for (let i = 0; i < limit; i++) {
      arr.push(arr[i]+'0');
      arr.push(arr[i]+'1');
    }
    arr.splice(0, limit);
  }
  return arr.map(x => `1${x}1`);
}

function buildBasesArr(str) {
  let arr = [];
  for (let i = 2; i <= 10; i++) {
    arr.push(parseInt(str, i));
  }
  return arr;
}

function stringHasPrime(str) {
  let arr = buildBasesArr(str);
  for (let i = 0; i < 9; i++) {
    if (isPrime(arr[i])) return true;
  }
  return false;
}

function resultForOneExample(str) {
  let arr = buildBasesArr(str),
    result = 'str';
  for (let i = 0; i < 9; i++) {
    str += ` ${getFirstDivisor(arr[i])}`
  }
  return str;
}

function coinJam(len, numOfExamples) {
  let possibleStrings = buildStr(len),
    limit = possibleStrings.length,
    examples = 0,
    result = `Case#1:`;
  for (let i = 0; i < limit; i++) {
    if (!stringHasPrime(possibleStrings[i])) {
      examples++;
      result += `
       ${resultForOneExample(possibleStrings[i])}`;
    }
    if (examples === numOfExamples) return result;
  }
}

/*
let result = coinJam(6, 3);
console.log(`Output is:
  ${result}
  `);
*/
let result1 = coinJam(16, 50);
console.log(`${result1}
  `);
