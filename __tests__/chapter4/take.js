const take = require('lodash/take');
const takeRight = require('lodash/takeRight');

describe('take', () => {
  it('should take elements from left', () => {
    let array = [1, 2, 3, 4, 5];
    expect(take(array)).toEqual([1]);
    expect(take(array, 3)).toEqual([1, 2, 3]);
  });

  it('should take elements from right', () => {
    let array = [1, 2, 3, 4, 5];
    expect(takeRight(array)).toEqual([5]);
    expect(takeRight(array, 3)).toEqual([3, 4, 5]);
  });
});