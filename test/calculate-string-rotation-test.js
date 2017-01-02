/**
 * Created by Sestri4kina on 02.01.2017.
 */

var assert = require('assert');
var shiftedDiff = require('../src/js/codewars-calculate-string-rotation');

describe('shiftedDiff', function(){
    it('returns position of shift', function(){
        assert.equal(shiftedDiff("eecoff","coffee"), 4, '1st test');
        assert.equal(shiftedDiff("hoop","pooh"), -1, 'not a valid rotation');
    });
});
