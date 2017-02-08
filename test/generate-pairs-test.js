/**
 * Created by Sestri4kina on 08.02.2017.
 */
var assert = require('assert');
var generatePairs = require('../src/js/codewars-generate-pairs');

describe('generatePairs', function(){
    it('returns generated pairs of integers from m to n', function(){
        assert.equal(generatePairs(2, 4), JSON.stringify([[2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4]]));
    });
});