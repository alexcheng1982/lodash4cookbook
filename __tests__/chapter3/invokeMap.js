const invokeMap = require('lodash/invokeMap');

describe('invokeMap', () => {
  it('should support method names', () => {
    expect(invokeMap(['a', 'b', 'c'], 'toUpperCase')).toEqual(['A', 'B', 'C']);
  });

  it('should support extra arguments', () => {
    expect(invokeMap([['a', 'b'], ['c', 'd']], 'join', '')).toEqual(['ab', 'cd']);
  });

  it('should support functions', () => {
    expect(invokeMap([{a: 1}, {a: 2}], function(toAdd) {
      return this.a + toAdd;
    }, 3)).toEqual([4, 5]);
  });
});