/**
 * Created by Sestri4kina on 07.01.2017.
 *
 * Given a lottery ticket (ticket), represented by an array of 2-value arrays,
 * you must find out if you've won the jackpot. Example ticket:
 * [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
 * To do this, you must first count the 'mini-wins' on your ticket.
 * Each sub array has both a string and a number within it. If the character code of any of the characters
 * in the string matches the number, you get a mini win.
 * Note you can only have one mini win per sub array.
 * Once you have counted all of your mini wins, compare that number to the other input provided (win).
 * If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
 */
function bingo(ticket, win) {
    var count = 0;
    for (var i = 0; i < ticket.length; i++){
        var str = ticket[i][0],
            num = ticket[i][1];
        str.split('').some((curr, index) => { return str.charCodeAt(index) === num }) ?
            count++ : count;
    }
    return count >= win ? 'Winner!' : 'Loser!';
}


var result = bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2);
console.log(`Should return: Loser!. Output is: ${result}`);

var result1 = bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1);
console.log(`Should return: Winner!. Output is: ${result1}`);

var result2 = bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3);
console.log(`Should return: Loser!. Output is: ${result2}`);

/*

 */