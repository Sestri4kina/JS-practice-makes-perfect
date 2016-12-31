/**
 * Created by Sestri4kina on 31.12.2016.
 */
var assert = require('assert');
var indexPower = require('../src/js/checkio-index-power.js');

describe('indexPower', function(){
    it('returns the N-th power of the element in the array with the index N', function(){
        assert.equal(indexPower([1, 2, 3, 4], 2), 9, '1st test');
        assert.equal(indexPower([1, 2], 3), -1, 'should return -1 if there is no N-th element in an array');
    });
});