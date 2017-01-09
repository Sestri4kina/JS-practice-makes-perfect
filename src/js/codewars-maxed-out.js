/**
 * Created by Sestri4kina on 09.01.2017.
 *
 * For this task you will be given an array of numbers, each number in turn has to be cubed
 * and once all numbers have been cubed all of them have to be added to get a final sum.
 *  If the final sum is less than or equal to the maximum value allowed for an Integer
 *  return the sum otherwise return "You've pushed me to the max!".
 *  You can assume that you will receive a valid array of numbers.
 */
function maxedOut(data){
    var result = data.map((x) => { return Math.pow(x, 3)})
        .reduce((prev, curr) => {return prev + curr});
    return (result >= Number.MIN_SAFE_INTEGER) && (result <= Number.MAX_SAFE_INTEGER) ?
        result :  "You've pushed me to the max!";

}

var result = maxedOut([1,2]);
console.log(`Should return : 9. Output is: ${result}`);

var result1 = maxedOut([7600,32300,66700,22200,4554,323000,5555]);
console.log(`Should return : "You've pushed me to the max!". Output is: ${result1}`);

var result2 = maxedOut([-530,230,5600,40,5,7200]);
console.log(`Should return : 548727354125. Output is: ${result2}`);