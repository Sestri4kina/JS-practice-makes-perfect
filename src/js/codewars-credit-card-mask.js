/**
 * Created by Sestri4kina on 23.12.2016.
 *
 * Usually when you buy something,
 * you're asked whether your credit card number, phone number or
 * answer to your most secret question is still correct.
 * However, since someone could look over your shoulder, you don't want that shown on your screen.
 * Instead, we mask it.
 * Your task is to write a function maskify, which changes all but the last four characters into '#'.
 */

module.exports = function maskify(data){
    var l = data.length;
    var partOne = '';
    for(var i = 0; i < l-4; i++){
        partOne += "#";
    }
    var partTwo = data.substring(l-4, l);
    return l > 4 ? (partOne + partTwo) : data;
}

/*
var result = maskify("4556364607935616");
console.log(`Should return: ############5616. Output is: ${result}`);

var result1 = maskify("1");
console.log(`Should return: "1". Output is: ${result1}`);

var result2 = maskify("Skippy");
console.log(`Should return: ##ippy. Output is: ${result2}`);
*
*  More elegant solution
function maskify(data) {
    return data.slice(0, -4).replace(/./g, '#') + data.slice(-4);
 }
*/