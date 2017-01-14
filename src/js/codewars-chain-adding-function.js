/**
 * Created by Sestri4kina on 14.01.2017.
 *
 * Function that will add numbers together when called in succession.
 */

//using Proxy to solve the task => https://ponyfoo.com/articles/es6-proxies-in-depth
function add(n){
    var sum = n;
    const chain = new Proxy(function a () {}, {
        get (obj, key) {
            return () => sum;
        },
        apply (receiver, ...args) {
            sum += args[1][0];
            return chain;
        },
    });
    return chain;
}


var result = add(1) ;
console.log(`Should return: 1. Output is: ${result}`);

var result1 = add(1)(2);
console.log(`Should return:  3. Output is: ${result1}`);

var result2 = add(1)(2)(10);
console.log(`Should return:  13. Output is: ${result2}`);

