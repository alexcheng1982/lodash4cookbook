const slice = require('lodash/slice');

describe('slice', () => {
  it('should create a slice of the array', () => {
    let array = [1, 2, 3, 4, 5];
    expect(slice(array, 0, 2)).toEqual([1, 2]);
  });

  it('should support negative index', () => {
    let array = [1, 2, 3, 4, 5];
    expect(slice(array, -2, -1)).toEqual([4]);
    expect(slice(array, -2)).toEqual([4, 5]);
  });
});