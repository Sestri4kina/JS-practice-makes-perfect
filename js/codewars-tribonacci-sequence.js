/**
 * Created by Sestri4kina on 20.12.2016.
 *
 * As the name may already reveal, it works basically like a Fibonacci,
 * but summing the last 3 (instead of 2) numbers of the sequence to generate the next.
 * Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function
 * that given a signature array/list, returns the first n elements -
 * signature included of the so seeded sequence.
 * Signature will always contain 3 numbers; n will always be a non-negative number; if n==0,
 * then return an empty array and be ready for anything else which is not clearly specified
 */

function tribonacci(signature, n){
    var arr = signature;
    for (var i = 3; i < n; i++){
        arr.push(arr[i-1] + arr[i-2] + arr[i-3]);
    }
    return n == 0 ? '[]' :
        n == 1 ? [signature[0]] :
            n == 2 ? [signature[0], signature[1]] : arr;
}


var result = tribonacci([1,1,1],10);
console.log(`Should return: [1,1,1,3,5,9,17,31,57,105]. Output is: ${result}`);

var result1 = tribonacci([0.5,0.5,0.5],6);
console.log(`Should return: [0.5,0.5,0.5,1.5,2.5,4.5]. Output is: ${result1}`);

var result2 = tribonacci([300,200,100],0);
console.log(`Should return: []. Output is: ${result2}`);

/*This one is a 'best practices' solution
 function tribonacci(signature,n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
        result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
    }
    return result;
 }
 */

/* This one I find interesting for the place where ternary operator was used
 function tribonacci(s,n){
    var arr = [];
    for(var i=0; i<n; i++) {
        arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
    }
    return arr;
 }
 */