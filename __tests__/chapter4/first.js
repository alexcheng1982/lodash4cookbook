const first = require('lodash/first');

describe('first', () => {
  it('should support non-empty arrays', () => {
    expect(first([1, 2, 3])).toEqual(1);
  });

  it('should support empty arrays', () => {
    expect(first([])).toBeUndefined();
  });
});