const pullAt = require('lodash/pullAt');

describe('pullAt', () => {
  it('should remove elements by index', () => {
    let array = [1, 2, 3, 4, 5];
    let result = pullAt(array, 0, 1);
    expect(result).toEqual([1, 2]);
    expect(array).toEqual([3, 4, 5]);

    result = pullAt([1, 2, 3, 4, 5], [0, 1]);
    expect(result).toEqual([1, 2]);
  });
});