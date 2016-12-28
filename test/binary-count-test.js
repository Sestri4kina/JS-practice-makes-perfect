/**
 * Created by Sestri4kina on 28.12.2016.
 */
var assert = require('assert');
var binaryCount = require('../src/js/checkio-binary-count');

describe('binaryCount', function( ){
    it('returns the quantity of 1 in the binary form of a number', function(){
        assert.equal(binaryCount(10), 2, '1st test');
        assert.equal(binaryCount(15), 4, '2nd test');
    });
});
