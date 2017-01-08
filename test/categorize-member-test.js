/**
 * Created by Sestri4kina on 09.01.2017.
 */
var assert = require('assert');
var openOrSenior = require('../src/js/codewars-categorize-member');

describe('openOrSenior', function(){
    it('returns ', function(){
        assert.equal(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]), ["Open", "Open", "Senior", "Open", "Open", "Senior"].toString());
        assert.equal(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]), ['Open', 'Open', 'Open', 'Open'].toString());
    });
});
