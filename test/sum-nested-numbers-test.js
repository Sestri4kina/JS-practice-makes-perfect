/**
 * Created by Sestri4kina on 21.01.2017.
 */
var assert = require('assert');
var sumNestedNumbers = require('../src/js/codewars-sum-nested-numbers');

describe('sumNestedNumbers', function(){
    it('returns sum of numbers raised to the power of their respective nesting levels', function(){
        assert.equal(sumNestedNumbers([1, [2], 3, [4, 5, [7]]]), 392);
        assert.equal(sumNestedNumbers([1, [3, 4], [5, [6]]]), 267);
    });
});
