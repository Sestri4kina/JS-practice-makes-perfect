/**
 * Created by Sestri4kina on 17.02.2017.
 */
var assert = require('assert');
var longestPalindrome = require('../src/js/codewars-longest-palindrome.js');

describe('iqTest', function(){
    it('returns length of the longest palindromic substring from a string', function(){
        assert.equal(longestPalindrome("baablkj12345432133d"), 9);
        assert.equal(longestPalindrome("baaaaacxt"), 5);
    });
});
