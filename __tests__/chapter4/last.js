const last = require('lodash/last');

describe('last', () => {
  it('should support non-empty arrays', () => {
    expect(last([1, 2, 3])).toEqual(3);
  });

  it('should support empty arrays', () => {
    expect(last([])).toBeUndefined();
  });
});