/**
 * Created by Sestri4kina on 18.01.2017.
 */
var assert = require('assert');
var findUniq = require('../src/js/codewars-find-unique-string');

describe('findUniq', function(){
    it('returns unique string from an array of strings', function(){
        assert.equal(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]), 'BbBb');
        assert.equal(findUniq([ ' abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]), 'foo');
        assert.equal(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]), 'Harry Potter');
    });
});
