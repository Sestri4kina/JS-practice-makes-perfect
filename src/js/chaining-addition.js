/**
 * Created by Sestri4kina on 22.02.2017.
 */
function add() {
    let sum = [...arguments].reduce((a,b) => { return a+b }, 0);

    let nextFunction = function() {
        let nextSum = [...arguments].reduce((a,b) => { return a+b }, 0);
        return add(sum+nextSum);
    };

    nextFunction.valueOf = function() {
        return sum;
    };

    return nextFunction;
}

console.log( `Output: ${+add(1,2,7)(5)()} == 15`);
console.log( `Output: ${+add(0)(-1, 1)(-22)()} == -22`);
console.log( `Output: ${+add(2, 4)(6)(8)()} == 20`);
console.log( `Output: ${+add(1)(1)(2)(3)(5)(8)()} == 20`);

