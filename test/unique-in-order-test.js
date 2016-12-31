/**
 * Created by Sestri4kina on 31.12.2016.
 */

var assert = require('assert');
var uniqueInOrder = require('../src/js/codewars-unique-in-order.js');

describe('uniqueInOrder', function(){
    it('returns a list of items', function(){
        assert.equal(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'].toString(), 'works for strings');
        assert.equal(uniqueInOrder([1,2,2,3,3]), [1,2,3].toString(), 'works for arrays');
    });
});
