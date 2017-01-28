/**
 * Created by Sestri4kina on 28.01.2017.
 */
var assert = require('assert');
var rolldiceSumProb = require('../src/js/codewars-probability-rolling-dices');

describe('rolldiceSumProb', function(){
    it('returns a probability to get a number rolling n dices', function(){
        assert.equal(rolldiceSumProb(11, 2), 0.0556);
        assert.equal(rolldiceSumProb(8, 3), 0.0972);
    });
});