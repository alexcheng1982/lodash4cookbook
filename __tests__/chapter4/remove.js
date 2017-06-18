const remove = require('lodash/remove');

describe('remove', () => {
  it('should remove elements', () => {
    let array = [1, 2, 3, 4, 5, 6];
    let result = remove(array, n => n % 3 === 0);
    expect(result).toEqual([3, 6]);
    expect(array).toEqual([1, 2, 4, 5]);
  });
});