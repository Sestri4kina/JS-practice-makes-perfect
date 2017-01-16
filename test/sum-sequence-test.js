/**
 * Created by Sestri4kina on 16.01.2017.
 */
var assert = require('assert');
var sequenceSum = require('../src/js/codewars-sum-sequence');

describe('sequenceSum', function(){
    it('returns sum of the sequence', function(){
        assert.equal(sequenceSum(2,2,2), 2);
        assert.equal(sequenceSum(2,6,2), 12);
    });
});
