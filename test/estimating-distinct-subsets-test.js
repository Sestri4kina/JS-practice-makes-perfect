/**
 * Created by Sestri4kina on 22.01.2017.
 */
var assert = require('assert');
var estSubsets = require('../src/js/codewars-estimating-distinct-subsets');

describe('estSubsets', function(){
    it('returns a number of distinct subsets', function(){
        assert.equal(estSubsets([1, 2, 3, 4]), 15);
        assert.equal(estSubsets([2, 3, 4, 5, 5, 6, 6, 7, 8, 8]), 127);
    });
});