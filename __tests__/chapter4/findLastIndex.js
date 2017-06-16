const findLastIndex = require('lodash/findLastIndex');

describe('findLastIndex', () => {
  it('should support function predicate', () => {
    let result = findLastIndex(['a', 'b', 'c'], char => char < 'd');
    expect(result).toEqual(2);
  });
});