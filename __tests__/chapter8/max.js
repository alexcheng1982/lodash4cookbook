const max = require('lodash/max');
const maxBy = require('lodash/maxBy');

describe('max', () => {
  it('should get the maximum value', () => {
    expect(max([])).toBeUndefined();
    expect(max([1, 2, 3, 4, 5])).toEqual(5);
    expect(maxBy(['abc', 'a', 'ab'], 'length')).toEqual('abc');
  });
});