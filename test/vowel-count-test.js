/**
 * Created by Sestri4kina on 23.12.2016.
 */

var assert = require('assert');
var getCount = require('../src/js/codewars-vowel-count.js');

describe('getCount', function(){
    it('returns the number of vowels in a given string', function(){
        assert.equal(getCount("abracadabra"), 5, '1st test');
        assert.equal(getCount('pear tree'), 4, '2nd test');
    });
});
