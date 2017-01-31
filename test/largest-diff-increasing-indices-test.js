/**
 * Created by Sestri4kina on 31.01.2017.
 */
var assert = require('assert');
var largestDifference = require('../src/js/codewars-largest-diff-increasing-indices');

describe('largestDifference', function(){
    it('returns the difference between the indexes of the two array elements that are farthest apart', function(){
        assert.equal(largestDifference([1,2,3]), 2);
        assert.equal(largestDifference([9,4,1,10,3,4,0,-1,-2]), 4);
    });
});