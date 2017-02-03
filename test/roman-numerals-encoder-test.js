/**
 * Created by Sestri4kina on 03.02.2017.
 */
var assert = require('assert');
var romanEncoder = require('../src/js/codewars-roman-numerals-encoder');

describe('romanEncoder', function(){
    it('returns the Roman Numeral representation of a number', function(){
        assert.equal(romanEncoder(1990), 'MCMXC');
        assert.equal(romanEncoder(8463), 'MMMMMMMMCDLXIII');
    });
});
