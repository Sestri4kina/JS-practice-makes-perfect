/**
 * Created by Sestri4kina on 13.04.2017.
 */

function processData(input) {
    let arr = input.split(''),
        uniqueArr = [],
        occurences = [],
        sortedArr = arr.slice(0).sort(),
        limit1 = arr.length,
        limit2 = uniqueArr.length,
        counter = 0;
    for (let i = 0; i < limit1; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) uniqueArr.push(arr[i]);
    }
    for (let i = 0; i < limit2; i++) {
        let occurence = sortedArr.lastIndexOf(uniqueArr[i]) - sortedArr.indexOf(uniqueArr[i]) + 1;
        if (occurences.indexOf(occurence) === -1 ) {
            occurences.push(occurence);
            counter++;
        }
    }
    //proceed with solution later
    return 'YES';
}

let result = processData('aabbcd');
console.log(`Should return: NO. Output is: ${result}`);

let result1 = processData('aabbc');
console.log(`Should return: YES. Output is: ${result1}`);
