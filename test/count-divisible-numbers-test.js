/**
 * Created by Sestri4kina on 30.01.2017.
 */
var assert = require('assert');
var divisibleCount = require('../src/js/codewars-count-divisible-numbers');

describe('divisibleCount', function(){
    it('returns an amount of divisible by k numbers in a range', function(){
        assert.equal(divisibleCount(101, 9007199254740991, 11), 818836295885535);
        assert.equal(divisibleCount(6,11,2), 3);
    });
});
