const concat = require('lodash/concat');

describe('concat', () => {
  it('should concatenate elements', () => {
    expect(concat([1, 2, 3], 4, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should concatenate arrays', () => {
    expect(concat([1, 2, 3], [4, 5], [[6]]))
      .toEqual([1, 2, 3, 4, 5, [6]]);
  });
});