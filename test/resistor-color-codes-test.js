/**
 * Created by Sestri4kina on 12.01.2017.
 */
var assert = require('assert');
var decodeResistorColors = require('../src/js/codewars-resistor-color-codes');

describe('decodeResistorColors', function(){
    it('returns resistance number and tolerance', function(){
        assert.equal(decodeResistorColors("yellow violet black"), "47 ohms, 20%");
        assert.equal(decodeResistorColors("yellow violet red gold"), "4.7k ohms, 5%");
        assert.equal(decodeResistorColors("brown black green silver"), "1M ohms, 10%");
    });
});
