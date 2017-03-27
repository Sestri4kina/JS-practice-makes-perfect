/*
* created by Sestri4kina on 26.03.2017
*
* https://code.google.com/codejam/contest/6254486/dashboard#s=p1
*
Input
The first line of the input gives the number of test cases, T. T test cases follow. Each consists of one line with a string S, each character of which is either + (which represents a pancake that is initially happy side up) or - (which represents a pancake that is initially blank side up). The string, when read left to right, represents the stack when viewed from top to bottom.
*
Output
For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the minimum number of times you will need to execute the maneuver to get all the pancakes happy side up.
*
Limits
1 ≤ T ≤ 100.
Every character in S is either + or -.
*
Small dataset
1 ≤ length of S ≤ 10.
Large dataset
1 ≤ length of S ≤ 100.
*/
function flip(str) {
  return str.split('')
    .map(x => {return x === '+' ? x = '-' : x = '+';})
    .join('');
}

function flipPancakes(str) {
  if (str.indexOf('-') === -1) return 0;
  let counter = 0;
  for (;;) {
    let ind = str.lastIndexOf('-');
    str = flip(str.slice(0, ind+1)) + str.slice(ind+1);
    counter++;
    if (str.indexOf('-') === -1) return counter;
  }
}

let result = flipPancakes('-');
console.log(`Should return: 1. Output is: ${result}`);

let result1 = flipPancakes('-+');
console.log(`Should return: 1. Output is: ${result1}`);

let result2 = flipPancakes('+-');
console.log(`Should return: 2. Output is: ${result2}`);

let result3 = flipPancakes('+++');
console.log(`Should return: 0. Output is: ${result3}`);

let result4 = flipPancakes('--+-');
console.log(`Should return: 3. Output is: ${result4}`);

let result5 = flipPancakes('--+-+');
console.log(`Should return: 3. Output is: ${result5}`);
