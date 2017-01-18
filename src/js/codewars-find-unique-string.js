/**
 * Created by Sestri4kina on 17.01.2017.
 *
 * There is an array of strings.
 * All strings contains similar letters except one. Try to find it!
 * Strings may contain spaces. It’s guaranteed that array contains more than 3 strings.
 */
function findUniq(data){
    var tmp = data.map(str => {
        return str.toUpperCase().split('').sort().filter(x => {return x !== ' '}).join('');
    });
    var arr = tmp.sort();
    var element;
    if (arr[0].length === arr[1].length && arr[0] === arr[1]){
        element = arr[arr.length - 1];
    } else if (arr[0].length !== arr[1].length && arr[1].indexOf(arr[0].charAt(0)) !== -1){
        element = arr[arr.length - 1];
    } else {
        element = arr[0];
    }
    return data.find(x => {
        return x.toUpperCase().split('').sort().filter(x => {return x !== ' '}).join('') == element;
    });
}

var result = findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]);
console.log(`Should return: 'BbBb'. Output is: ${result}
`);

var result1 = findUniq([ ' abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]);
console.log(`Should return: 'foo'. Output is: ${result1}
`);

var result2 = findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]);
console.log(`Should return: 'Harry Potter'. Output is: ${result2}
`);

var result3 = findUniq([ 'silvia', 'vasili', 'victor' ]);
console.log(`Should return: 'victor'. Output is: ${result3}
`);


/*
*/

