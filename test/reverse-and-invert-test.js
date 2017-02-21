/**
 * Created by Sestri4kina on 21.02.2017.
 */
var assert = require('assert');
var reverseInvert = require('../src/js/codewars-reverse-and-invert');

describe('reverseInvert', function() {
    it('returns an array of reversed and inverted elements', function() {
        assert.equal(reverseInvert([1,12,'a',3.4,87,99.9,-42,50,5.6]), [-1,-21,-78,24,-5].toString());
        assert.equal(reverseInvert([-9,-18,99]), [9,81,-99].toString());
    });
});

