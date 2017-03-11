/**
 * Created by Sestri4kina on 11.03.2017.
 *
 * https://www.codewars.com/kata/camelcase-method/train/javascript
 */
String.prototype.camelCase=function(){
    return this.split(' ')
        .map( x =>  x.slice(0,1).toUpperCase() + x.slice(1) )
        .join('');
};

var result = "camel case method".camelCase();
console.log(`Should return: "CamelCaseMethod". Output is: ${result}
`);

var result3 = "say hello ".camelCase();
console.log(`Should return: "SayHello". Output is: ${result3}
`);

var result1 = "".camelCase();
console.log(`Should return: "". Output is: ${result1}
`);