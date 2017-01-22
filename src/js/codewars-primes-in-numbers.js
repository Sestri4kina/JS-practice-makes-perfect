/**
 * Created by Sestri4kina on 21.01.2017.
 *
 * Given a positive number n > 1 find the prime factor decomposition of n.
 * The result will be a string with the following form :
 * "(p1**n1)(p2**n2)...(pk**nk)"
 * with the p(i) in increasing order and n(i) empty if n(i) is 1.
 * Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
 */
function primeFactors(num){
    var factors = [],
        divisor = 2;
    while (num >= 2){
        if(num % divisor === 0){
            factors.push(divisor);
            num = num / divisor;
        } else {
            divisor++;
        }
    }

    return factors.length == 0 ? `(${num})` :
        factors
        .filter((x, index, arr) => {return x !== arr[index+1]})
        .map(x => {
            var power = factors.lastIndexOf(x) === factors.indexOf(x) ? 1 :
                factors.lastIndexOf(x)-factors.indexOf(x) + 1;
            return  power === 1 ? `(${x})` : `(${x}**${power})`})
        .join('');
}

var result = primeFactors(7775460);
console.log(`Should return: "(2**2)(3**3)(5)(7)(11**2)(17)". Output is: ${result}
`);

var result1 = primeFactors(86240);
console.log(`Should return: "(2**5)(5)(7**2)(11)". Output is: ${result1}
`);

var result2 = primeFactors(1);
console.log(`Should return: "(1)". Output is: ${result2}
`);