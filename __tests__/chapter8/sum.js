const sum = require('lodash/sum');
const sumBy = require('lodash/sumBy');

describe('sum', () => {
  it('should get the sum of an array', () => {
    expect(sum([1, 2, 3])).toEqual(6);
    expect(sumBy(['abc', 'a', 'ab'], 'length')).toEqual(6);
  });
});