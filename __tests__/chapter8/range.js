const range = require('lodash/range');

describe('range', () => {
  it('should generate a range of numbers', () => {
    expect(range(1, 6)).toEqual([1, 2, 3, 4, 5]);
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    expect(range(10, 1, -2)).toEqual([10, 8, 6, 4, 2]);
    expect(range(1, 10, -2)).toEqual([]);
    expect(range(3)).toEqual([0, 1, 2]);
    expect(range(1, 5, 0)).toEqual([1, 1, 1, 1]);
  });
});