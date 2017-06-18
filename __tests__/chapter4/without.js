const without = require('lodash/without');

describe('without', () => {
  it('should remove elements', () => {
    let array = [1, 2, 3, 4, 5];
    let result = without(array, 1, 2);
    expect(result).toEqual([3, 4, 5]);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });
});