/**
 * Created by Sestri4kina on 23.01.2017.
 */
function findMissingTerm(list){
    var diff = (list[1] - list[0] === list[2] - list[1]) ? list[1] - list[0] :
        (Math.abs(list[1] - list[0]) > Math.abs(list[2] - list[1])) ? list[2] - list[1]
            : list[1] - list[0];
    return list.find((x, index, arr) => {return x + diff !== arr[index+1]}) + diff;
}

var result = findMissingTerm([ -12, -17, -22, -27, -37, -42 ]);
console.log(`Should return: -32. Output is: ${result}
`);

var result1 = findMissingTerm([ 1, -5, -8 ]);
console.log(`Should return: -2. Output is: ${result1}
`);