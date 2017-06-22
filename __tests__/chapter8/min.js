const min = require('lodash/min');
const minBy = require('lodash/minBy');

describe('min', () => {
  it('should get the minimum value', () => {
    expect(min([])).toBeUndefined();
    expect(min([1, 2, 3, 4, 5])).toEqual(1);
    expect(minBy(['abc', 'a', 'ab'], 'length')).toEqual('a');
  });
});