/**
 * Created by Sestri4kina on 12.04.2017.
 */
function sequenceMaxSum(arr) {
  let start = 0, end = 0, compare = 0,
      limit = arr.length;
  for (let i = 0; i < limit; i++) {
    for (let j = i+1; j < limit; j++) {
      let sumOfSequence = arr.slice(i,j).reduce((a,b) => {return a+b;},0)
      if (sumOfSequence > compare) {
        compare = sumOfSequence;
        start = i;
        end = j;
      }
    }
  }
  return arr.slice(start, end);
}

console.log( `Output is: ${sequenceMaxSum([1, -2, 3, -1, 5, -6])}. Should be: [3,-1,5]`);
console.log( `Output is: ${sequenceMaxSum([-1, 7, -5, 2])}. Should be: [7]`);
