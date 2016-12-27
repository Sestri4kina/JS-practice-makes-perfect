/**
 * Created by Sestri4kins on 27.12.2016.
 */
var assert = require('assert');
var toWeirdCase = require('../src/js/codewars-weird-string');

describe('toWeirdCase', function(){
    it('returns words with upper-case letters on the even positions', function(){
        assert.equal(toWeirdCase("String"), 'StRiNg', 'test for one word');
        assert.equal(toWeirdCase("This is a test"), 'ThIs Is A TeSt', 'test for a sequence of words');
    });
});
