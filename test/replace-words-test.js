/**
 * Created by Sestri4kina on 02.05.2017.
 */
 let assert = require('assert');
 let replaceWords = require('../src/js/codewars-replace-words.js');

 describe('replaceWords', () => {
     it('returns a string with words swapped in max/min length style', () => {
         assert.equal(replaceWords("I am the best"), "Best the am I");
         assert.equal(replaceWords("I am better than him"), "Better than I am him");
     });
 });
