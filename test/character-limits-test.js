/**
 * Created by Sestri4kina on 02.03.2017.
 */
var assert = require('assert');
var charCheck = require('../src/js/codewars-character-limits');

describe('oharCheck', function(){
    it('returns an array of a boolean and a modified string', function(){
        assert.equal(charCheck("I am applying for the role of Base Manager on Titan.", 60, true), [true, "I am applying for the role of Base Manager on Titan."].toString());
        assert.equal(charCheck("I have no notice period on Phobos. I can start immediately.", 50, true), [false, "I have no notice period on Phobos. I can start imm"].toString());
    });
});