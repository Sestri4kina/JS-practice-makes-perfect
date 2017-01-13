/**
 * Created by Sestri4kina on 13.01.2017.
 */
var assert = require('assert');
var reverseSlice = require('../src/js/codewars-string-reverse-slicing');

describe('reverseSlice', function(){
    it('returns a list of strings', function(){
        assert.equal(reverseSlice('123'), ['321', '21', '1'].toString());
        assert.equal(reverseSlice('abcde'), ['edcba', 'dcba', 'cba', 'ba', 'a'].toString());
    });
});
