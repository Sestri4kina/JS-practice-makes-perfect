/**
 * Created by Sestri4kina on 01.01.2017.
 *
 * Your task is to reduce a list of numbers to one number.
 * For this you get a list of rules, how you have to reduce the numbers.
 * You have to use these rules consecutively.
 * So when you get to the end of the list of rules, you start again at the beginning.
 *
 */
module.exports = function reduceByRules(data, rules) {
    return data.reduce( (prev, curr, index) => {
        var rule = rules[(index - 1) % rules.length];
        return rule(prev,curr);
    });
};

/*
var result = reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b]);
console.log(`Should return : 6.0. Output is: ${result}`);

var result1 = reduceByRules([8.0, 8.1, 4.1, 12.0, 2.0], [(a, b) => Math.min(a, b), (a, b) => Math.max(a, b)]);
console.log(`Should return : 8.0. Output is: ${result1}`);

var result2 = reduceByRules([1.3, 2.0, 3.3], [(a, b) => Math.min(a, b), (a, b) => Math.max(a, b)]);
console.log(`Should return : 3.3. Output is: ${result2}`);

/*
previous solution
 return data.reduce( (prev, curr, index) => {
 var rule = index <= rules.length ? rules[index - 1] :
 index <= 2 * rules.length ? rules[index - 1 - rules.length] :
 rules[index - 1 - 2 *rules.length];

 return rule(prev,curr);
 });
 */