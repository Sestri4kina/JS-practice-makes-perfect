/**
 * Created by Sestri4kina on 10.03.2017.
 */
var assert = require('assert');
var nextSmaller = require('../src/js/codewars-smaller-number-same-digits');

describe('nextSmaller', function() {
    it('returns the closest smaller number compounded from the same digits', function() {
        assert.equal(nextSmaller(2071),2017);
        assert.equal(nextSmaller(907), 790);
        assert.equal(nextSmaller(111), -1);
    });
});
