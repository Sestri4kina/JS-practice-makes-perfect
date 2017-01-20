/**
 * Created by Sestri4kina on 19.01.2017.
 *
 * Sum of all numbers in a series of nested arrays raised to the power of their respective nesting levels.
 * Numbers in the outer most array should be raised to the power of 1.
 * sumNestedNumbers([1, [2], 3, [4, [5]]]) =>
 * should return: 1 + 2*2 + 3 + 4*4 + 5*5*5 === 149.
 */
function sumNestedNumbers(data) {
    var result = [];

    data.forEach(x => {
        if (typeof x === 'number'){ result.push(x)}
        else if (typeof x === 'object' && x.length === 1){
            if (typeof x[0] === 'number' ){result.push(Math.pow(x[0],2))}
            else if (typeof x[0] === 'object' && typeof x[0][0] === 'number'){result.push(Math.pow(x[0][0],3))}
            else if (typeof x[0][0] === 'object' && typeof x[0][0][0] === 'number'){result.push(Math.pow(x[0][0][0],4))}
            else{result.push(Math.pow(x[0][0][0],5))}
        }
        else if (typeof x === 'object' && x.length > 1){
            x.forEach(y => {
                if (typeof y === 'number' ){result.push(Math.pow(y,2))}
                else if (typeof y === 'object' && typeof y[0] === 'number'){result.push(Math.pow(y[0],3))}
                else if (typeof y[0] === 'object' && typeof y[0][0] === 'number'){result.push(Math.pow(y[0][0],4))}
                else{result.push(Math.pow(y[0][0][0],5))}
            });
        }
    });
    return result.reduce((a, b) => {return a + b});
}

var result = sumNestedNumbers([1, [2], 3, [4, 5, [7]]]);
console.log(`Should return: 392. Output is: ${result}
`);

var result1 = sumNestedNumbers([1, [3, 4], [5, [6]]]);
console.log(`Should return: 267. Output is: ${result1}
`);

/*
more elegant solution:
1.
 function sumNestedNumbers(arr, level = 1) {
 let sum = 0;

 for (let i = 0; i < arr.length; i++) {
 if (typeof arr[i] === 'number') {
 sum += Math.pow(arr[i], level);
 } else {
 sum += sumNestedNumbers(arr[i], level + 1);
 }
 }

 return sum;
 }
 2.
 function sumNestedNumbers(arr, pow=1) {
 return arr.reduce( (s,a) => s+(a.reduce ? sumNestedNumbers(a,pow+1) : Math.pow(a,pow)), 0 )
 }
 */
