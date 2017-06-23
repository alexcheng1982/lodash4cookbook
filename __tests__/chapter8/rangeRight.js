const rangeRight = require('lodash/rangeRight');

describe('rangeRight', () => {
  it('should generate a range of numbers in descending order', () => {
    expect(rangeRight(1, 6)).toEqual([5, 4, 3, 2, 1]);
    expect(rangeRight(1, 10, 2)).toEqual([9, 7, 5, 3, 1]);
  });
});