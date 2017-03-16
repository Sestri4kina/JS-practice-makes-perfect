/*
* created by Sestri4kina on 15.03.2017
*
* https://www.codewars.com/kata/two-oldest-ages-1/train/javascript
*/
module.exports = function twoOldestAges(ages){
    return ages.slice().sort((a,b) => {return a-b}).slice(-2);
};

/*
let result = twoOldestAges( [1, 2, 10, 8] );
console.log(`Should return: [8, 10]. Output is: ${result}`);
*/
