/**
 * Created by Sestri4kina on 11.01.2017.
 *
 * The basic resistor color codes are:
 * black: 0, brown: 1, red: 2, orange: 3, yellow: 4,
 * green: 5, blue: 6, violet: 7, gray: 8, white: 9.
 * Most resistors will also have a fourth band that is either gold or silver,
 * with gold indicating plus or minus 5% tolerance, and silver indicating 10% tolerance.
 * Resistors that do not have a fourth band are rated at 20% tolerance.
 */

function decodeResistorColors(bands){
    var colorCodes = [['black', 0], ['brown', 1], ['red', 2],
        ['orange', 3], ['yellow', 4], ['green', 5], ['blue', 6],
        ['violet', 7], ['gray', 8], ['white', 9]
    ];

    var arrBands = bands.split(' '),
        firstDigit = colorCodes.find(x => { return x[0] === arrBands[0]})[1],
        secondDigit = colorCodes.find(x => { return x[0] === arrBands[1]})[1],
        power = colorCodes.find(x => { return x[0] === arrBands[2] })[1],
        tolerance = arrBands.length === 3 ? '20%' :
            arrBands[3] === 'gold' ? '5%' :
            arrBands[3] === 'silver' ? '10%' : 0;

    var num = Number(`${firstDigit}${secondDigit}`) * Math.pow(10, power);

    return (num < 1000) ? `${num} ohms, ${tolerance}` :
        (num >= 1000 && num < 1000000) ? `${num/1000}k ohms, ${tolerance}` :
            (num >= 1000000) ? `${num/1000000}M ohms, ${tolerance}` : 'resistance is more than 1mln';
}

var result = decodeResistorColors("yellow violet black");
console.log(`Should return: "47 ohms, 20%". Output is: ${result}`);

var result1 = decodeResistorColors("yellow violet red gold");
console.log(`Should return: "4.7k ohms, 5%". Output is: ${result1}`);

var result2 = decodeResistorColors("brown black green silver");
console.log(`Should return: "1M ohms, 10%". Output is: ${result2}`);
