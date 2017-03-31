/**
 * Created by Sestri4kina on 31.03.2017.
 */
let assert = require('assert');
let squareProduct = require('../src/js/codewars-product-of-two-squares');

describe('squareProduct', () => {
    it('returns array of possible pairs [a,b] for n=a^2*b^2 ', () => {
        assert.equal(squareProduct(16).toString(), [[1,4],[2,2]].toString());
        assert.equal(squareProduct(256).toString(), [[1,16],[2,8],[4,4]].toString());
      });
});
