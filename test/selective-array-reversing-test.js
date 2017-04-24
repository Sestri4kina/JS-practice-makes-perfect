/**
 * Created by Sestri4kina on 24.04.2017.
 */
 let assert = require('assert');
 let selReverse = require('../src/js/codewars-selective-array-reversing.js');

 describe('selReverse', () => {
     it('returns an array of selectively reversed elements', () => {
         assert.equal(selReverse([2,4,6,8,10,12,14,16], 3), [6,4,2, 12,10,8, 16,14].toString());
         assert.equal(selReverse([1,2,3,4,5,6], 2), [2,1, 4,3, 6,5].toString());
     });
 });
