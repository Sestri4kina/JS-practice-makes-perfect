/**
 * Created by Sestri4kina on 01.05.2017.
 *
 * https://www.codewars.com/kata/simple-fun-number-218-replace-words/train/javascript
 */
module.exports = function replaceWords(sentence) {
  let arr = sentence.split(' '),
    sortedArr = arr.slice()
    .sort((a, b) => {return a.length - b.length}),
    result = [], limit = arr.length;

  for (let i = 0; i < limit; i++) {
    let ind = sortedArr.indexOf(arr[i]),
      el = sortedArr[limit - 1 - ind];
    result.push(el);
  }

  result = result.map(x => x !== 'I' ? x.toLowerCase() : x);
  result[0] = result[0].charAt(0).toUpperCase() + result[0].slice(1);

  return result.join(' ');
};

/*
let result = replaceWords("I am the best");
console.log(`Should return: "Best the am I". Output is: ${result}
`);

let result1 = replaceWords("I am better than him");
console.log(`Should return: "Better than I am him". Output is: ${result1}
`);
*/
