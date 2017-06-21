const dropWhile = require('lodash/dropWhile');
const dropRightWhile = require('lodash/dropRightWhile');

describe('dropWhile', () => {
  it('should drop elements from left', () => {
    let array = [1, 2, 3, 4, 5];
    expect(dropWhile(array, n => n < 3)).toEqual([3, 4, 5]);
  });

  it('should drop elements from right', () => {
    let array = [1, 2, 3, 4, 5];
    expect(dropRightWhile(array, n => n < 3)).toEqual([1, 2, 3, 4, 5]);
  });
});