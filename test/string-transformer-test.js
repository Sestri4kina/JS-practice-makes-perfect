/**
 * Created by Sestri4kina on 17.01.2017.
 */
var assert = require('assert');
var stringTransformer = require('../src/js/codewars-string-transformer');

describe('stringTransformer', function(){
    it('returns transformed string', function(){
        assert.equal(stringTransformer('Example string'), 'STRING eXAMPLE');
        assert.equal(stringTransformer('STRING eXAMPLE'), 'Example string');
    });
});
