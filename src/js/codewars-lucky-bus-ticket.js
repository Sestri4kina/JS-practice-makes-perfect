/**
 * Created by Sestri4kina on 04.02.2017.
 *
 *https://www.codewars.com/kata/lucky-bus-ticket/train/javascript
 */
module.exports = function isLucky(ticket) {
    if ( ticket.length != 6 ) return false;
    var firstHalf = ticket
            .slice(0, 3)
            .split('')
            .reduce((prev, curr) => { return Number(prev) + Number(curr) }),
        secondHalf = ticket
            .slice(3)
            .split('')
            .reduce((prev, curr) => { return Number(prev) + Number(curr) });

    return firstHalf === secondHalf;
};

/*
var result = isLucky('123321');
console.log(`Should return: true. Output is: ${result}
`);

var result3 = isLucky('12a12a');
console.log(`Should return: false. Output is: ${result3}
`);

var result1 = isLucky('12341234');
console.log(`Should return: false. Output is: ${result1}
`);

/*
solution with interesting details:
 function isLucky(s) {
 // Checking random tests
    return /^[0-9]{6}$/.test(s) &&
        s.slice(0, 3).split("")
        .reduce((s, n) => s + +n, 0) ===
        s.slice(3).split("")
        .reduce((s, n) => s + +n, 0);
 }
 */
