/**
 * Created by Sestri4kina on 05.02.2017.
 *
 * https://www.codewars.com/kata/vodka-festival/javascript
 * Write function which accepts an array of drank amounts from various cups and calculate
 * total amount of vodka drunk by god.Result must be rounded to nearest one and
 * can be return both in literes or mililitres.
 */
module.exports = function vodkaConsumption(shots){
    var capacity = shots
        .map(x => {
            if ( x.endsWith('ml') ) return +x.replace(/ml/, '');
            else if ( x.endsWith('l') ) return +x.replace(/l/, '') * 1000;

        })
        .reduce((prev, curr) => { return prev + curr});

    return `${capacity}ml`;
};

/*
var result = vodkaConsumption(["40ml","5.5l"]);
console.log(`Should return: '5540ml'. Output is: ${result}
`);

var result3 = vodkaConsumption(["500ml","2l","1.4l"]);
console.log(`Should return: '3900ml'. Output is: ${result3}
`);
*/
