/**
 * Created by Sestri4kina on 14.02.2017.
 */
var assert = require('assert');
var averages = require('../src/js/codewars-averages-of-numbers');

describe('averages', function(){
    it('returns an array of averages of each number and his follower', function(){
        assert.equal(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0].toString());
        assert.equal(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5].toString());
    });
});
