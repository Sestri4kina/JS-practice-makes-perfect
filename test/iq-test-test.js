/**
 * Created by Sestri4kina on 01.01.2017.
 */

var assert = require('assert');
var iqTest = require('../src/js/codewars-iq-test.js');

describe('iqTest', function(){
    it('returns position of number that differs from others by evenness', function(){
        assert.equal(iqTest("2 4 7 8 10"), 3, '7 is the only odd number in a sequence');
        assert.equal(iqTest("1 2 1 1"), 2, '2 is the only even number in a sequence');
    });
});
