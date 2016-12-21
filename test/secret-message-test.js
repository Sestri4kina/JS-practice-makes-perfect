/**
 * Created by Sestri4kina on 21.12.2016.
 *
 * assert.equal(actual, expected[, message])
 */
var assert = require('assert');
var findMessage = require('../src/js/checkio-secret-message');

describe('findMessage', function() {
    it('returns all capital letters as one word in the order that they appear in the text', function() {
        assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
        assert.equal(findMessage("hello world!"), "", "Nothing");
        assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");

    });
});
