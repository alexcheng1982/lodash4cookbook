const takeWhile = require('lodash/takeWhile');
const takeRightWhile = require('lodash/takeRightWhile');

describe('takeWhile', () => {
  it('should take elements from left', () => {
    let array = [1, 2, 3, 4, 5];
    expect(takeWhile(array, n => n < 3)).toEqual([1, 2]);
  });

  it('should take elements from right', () => {
    let array = [1, 2, 3, 4, 5];
    expect(takeRightWhile(array, n => n < 3)).toEqual([]);
  });
});