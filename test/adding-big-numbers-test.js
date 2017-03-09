/**
 * Created by Sestri4kina on 09.03.2017.
 */
var assert = require('assert');
var add = require('../src/js/codewars-adding-big-numbers');

describe('add', function(){
    it('returns a sum of big numbers', function(){
        assert.equal(add('99', '11'), '110');
        assert.equal(add('123', '999999'), '1000122');
    });
});
