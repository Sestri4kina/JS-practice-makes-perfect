/**
 * Created by Sestri4kina on 14.01.2017.
 */
var assert = require('assert');
var add = require('../src/js/codewars-chain-adding-function');

describe('add', function(){
    it('returns sum of numbers', function(){
        assert.equal(add(1), 1);
        assert.equal(add(1)(2)(10), 13);
    });
});
