const uniq = require('lodash/uniq');

describe('uniq', () => {
  it('should remove duplicates', () => {
    expect(uniq([3, 2, 5, 3, 2])).toEqual([3, 2, 5]);
  });
});