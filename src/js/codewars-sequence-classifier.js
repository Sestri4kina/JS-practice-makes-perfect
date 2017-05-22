/**
 * Created by Sestri4kina on 22.05.2017.
 *
 * https://www.codewars.com/kata/sequence-classifier/train/javascript
 */
 function sequenceClassifier(arr){
   let newArr = arr.slice(1).map(x => x - arr[0]);

   if ( newArr.every(x => x === 0) ) { return 5; }
   else if ( newArr.every((x, i, a) => x < 0 && i === a.lastIndexOf(x)) ) { return 3; }
   else if ( newArr.every((x, i, a) => x > 0 && i === a.lastIndexOf(x)) ) { return 1; }
   else if ( newArr.every(x => x <= 0) ) { return 4; }
   else if ( newArr.every(x => x >= 0) ) { return 2; }
   else { return 0; }
 }

 var result = sequenceClassifier([3,5,8,8,14,14]);
 console.log(`Should return: 2. Output is: ${result}
 `);

 var result1 = sequenceClassifier([3,5,8,1,14,3]);
 console.log(`Should return: 0. Output is: ${result1}
 `);

 var result2 = sequenceClassifier([14,9,8,5,3,1]);
 console.log(`Should return: 3. Output is: ${result2}
 `);
