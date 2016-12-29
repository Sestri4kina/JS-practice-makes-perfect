/**
 * Created by Sestri4kina on 30.12.2016.
 */
var assert = require('assert');
var countInversion = require('../src/js/checkio-count-inversion.js');

describe('countInversion', function(){
    it('returns the number of inversions in asequence', function(){
        assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, '1st test');
        assert.equal(countInversion([0, 1, 2, 3]), 0, '2nd test');
    });
});