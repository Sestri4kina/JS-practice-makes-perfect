/*
* created by Sestri4kina on 29.03.2017
*
* https://code.google.com/codejam/contest/6224486/dashboard
* Input:
The first line of the input gives the number of test cases, T.
T test cases follow. Each consists of one line with Smax,
the maximum shyness level of the shyest person in the audience,
followed by a string of Smax + 1 single digits. The kth digit of this string
(counting starting from 0) represents how many people in the audience
have shyness level k. For example, the string "409" would mean that
there were four audience members with Si = 0 and nine audience members
with Si = 2 (and none with Si = 1 or any other value).
Note that there will initially always be between 0 and 9 people
with each shyness level.
The string will never end in a 0. Note that this implies that there will
always be at least one person in the audience.

Output:
For each test case, output one line containing "Case #x: y",
where x is the test case number (starting from 1) and y is
the minimum number of friends you must invite.

Limits: 1 ≤ T ≤ 100.
Small dataset: 0 ≤ Smax ≤ 6.
Large dataset: 0 ≤ Smax ≤ 1000.
*/
function standingOvation(maxShyness, audience) {
  let arr = audience.split('').map(x => +x),
    numOfPeople = arr.reduce((a,b) => {return a+b;}),
    minPeopleToAdd = 0,
    limit = maxShyness + 1;
  if (numOfPeople >= maxShyness && arr[0] >= 1) return 0;
  for (let i = 1; i < limit; i++) {
    let subArr = arr.slice(0,i),
      subArrPeople = subArr.reduce((a,b) => {return a+b}),
      check = subArrPeople + minPeopleToAdd;
    if (check < i) minPeopleToAdd += i - check;
  }
  return minPeopleToAdd;
}

let result = standingOvation(4, '11111');
console.log(`Should return: 0. Case#1: ${result}`);

let result1 = standingOvation(1, '09');
console.log(`Should return: 1. Case#2: ${result1}`);

let result2 = standingOvation(5, '110011');
console.log(`Should return: 2. Case#3: ${result2}`);

let result3 = standingOvation(0, '1');
console.log(`Should return: 0. Case#4: ${result3}`);
