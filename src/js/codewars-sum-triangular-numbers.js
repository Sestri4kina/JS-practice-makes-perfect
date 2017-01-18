/**
 * Created by Sestri4kina on 18.01.2017.
 *
 * Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
 * Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation
 * of the natural numbers 1, 2, 3, 4, 5, etc."
 */
//using pure mathematics: return nth < 0 ? 0 : nth * (nth + 1) * (nth + 2) / 6;
//building code as programmer:
function sumTriangularNumbers(nth){
    var triangularNums = [1];
    if (nth < 0){return 0}
    for (var i = 1; i < nth; i++){
        var nextEl = triangularNums[triangularNums.length - 1] + i + 1;
        triangularNums.push(nextEl);
    }
    return triangularNums.reduce((a, b) => {return a+b});
}

var result = sumTriangularNumbers(6);
console.log(`Should return: 56. Output is: ${result}
`);

var result1 = sumTriangularNumbers(943);
console.log(`Should return: 140205240. Output is: ${result1}
`);

var result2 = sumTriangularNumbers(-971);
console.log(`Should return: 0. Output is: ${result2}
`);