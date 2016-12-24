/**
 * Created by Sestri4kina on 24.12.2016.
 */

var assert = require('assert');
var fizzBuzz = require('../src/js/checkio-fizz-buzz.js');

describe('fizzBuzz', function(){
    it('returns string depending on divisibility by 3 and/or 5', function(){
        assert.equal(fizzBuzz(15), 'Fizz Buzz', '1st test');
        assert.equal(fizzBuzz(7), '7', '2nd test');
    });
});
