/**
 * Created by Sestr4kina on 11.01.2017.
 */
var assert = require('assert');
var fakeBin = require('../src/js/codewars-fake-binary');

describe('fakeBin', function(){
    it('returns a string of digits 0 and 1', function(){
        assert.equal(fakeBin('45385593107843568'), '01011110001100111');
        assert.equal(fakeBin('509321967506747'), '101000111101101');
    });
});
