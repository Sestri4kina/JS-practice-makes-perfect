/**
 * Created by Sestri4kina on 08.01.2017.
 */

var assert = require('assert');
var decipherThis = require('../src/js/codewars-decipher-this');

describe('desipherThis', function(){
    it('returns secret messages', function(){
        assert.equal(decipherThis('72olle 103doo 100ya'), 'Hello good day');
        assert.equal(decipherThis('82yade 115te 103o'), 'Ready set go');
    });
});
