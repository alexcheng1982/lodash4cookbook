const drop = require('lodash/drop');
const dropRight = require('lodash/dropRight');

describe('drop', () => {
  it('should drop elements from left', () => {
    let array = [1, 2, 3, 4, 5];
    expect(drop(array)).toEqual([2, 3, 4, 5]);
    expect(drop(array, 3)).toEqual([4, 5]);
  });

  it('should drop elements from right', () => {
    let array = [1, 2, 3, 4, 5];
    expect(dropRight(array)).toEqual([1, 2, 3, 4]);
    expect(dropRight(array, 3)).toEqual([1, 2]);
  });
});