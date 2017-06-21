const toPairs = require('lodash/toPairs');

describe('toPairs', () => {
  it('should transform objects into name-value pairs', () => {
    let result = toPairs({a: 1, b: 2});
    expect(result).toEqual([['a', 1], ['b', 2]]);
  });
});