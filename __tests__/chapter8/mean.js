const mean = require('lodash/mean');
const meanBy = require('lodash/meanBy');

describe('mean', () => {
  it('should get the mean value', () => {
    expect(mean([1, 2, 3, 4, 5])).toEqual(3);
    expect(meanBy(['abc', 'a', 'ab'], 'length')).toEqual(2);
  });
});