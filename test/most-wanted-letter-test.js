/**
 * Created by Sestri4kina on 22.12.2016.
 */

var assert = require('assert');
var mostWanted = require('../src/js/checkio-most-wanted-letter');

describe('mostWanted', function() {
    it('returns the most frequent letter(alphabetic order)', function() {
        assert.equal(mostWanted("Hello World!"), "l", "1st example");
        assert.equal(mostWanted("How do you do?"), "o", "2nd example");
        assert.equal(mostWanted("One"), "e", "3rd example");
        assert.equal(mostWanted("fn;lsfndasl;f naslkdnlkasdnfslahwemwjkrjkl;zcmk;lzcdkcslksdkseewme,"), "k", "4th example");

    });
});
