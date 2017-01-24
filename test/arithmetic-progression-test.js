/**
 * Created by Sestri4kina on 24.01.2017.
 */
var assert = require('assert');
var hasArithmProg = require('../src/js/codewars-arithmetic-progression');

describe('hasArithmProg', function(){
    it('returns a boolean (is arithmetic), a number(has arithmetic - the index) or undefined', function(){
        assert.equal(hasArithmProg([9,5,1]), true);
        assert.equal(hasArithmProg([90,2,4,6,8,14]), 1);
    });
});
