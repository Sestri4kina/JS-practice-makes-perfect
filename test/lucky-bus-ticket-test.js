/**
 * Created by Sestri4kina on 05.02.2017.
 */
var assert = require('assert');
var isLucky = require('../src/js/codewars-lucky-bus-ticket');

describe('isLucky', function(){
    it('returns whether a ticket is lucky or not', function(){
        assert.equal(isLucky('123321'), true);
        assert.equal(isLucky('12a12a'), false);
    });
});
