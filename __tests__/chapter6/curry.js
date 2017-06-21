const curry = require('lodash/curry');
const isFunction = require('lodash/isFunction');

describe('curry', () => {
  it('should support function currying', () => {
    let sum = (a, b) => a + b;
    expect(curry(sum)(1, 2)).toEqual(3);
    expect(isFunction(curry(sum)(1))).toBe(true);
    expect(curry(sum)(1)(2)).toEqual(3);
  });
});