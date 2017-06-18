const sortedUniq = require('lodash/sortedUniq');
const sortedUniqBy = require('lodash/sortedUniqBy');

describe('sortedUniq & sortedUniqBy', () => {
  it('should remove duplicates', () => {
    expect(sortedUniq([1, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(sortedUniqBy([1, 2, 2, 3], n => 1)).toEqual([1]);
  });
});