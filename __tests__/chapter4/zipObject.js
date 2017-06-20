const zipObject = require('lodash/zipObject');

describe('zipObject', () => {
  it('should work with arrays of the same length', () => {
    let result = zipObject(['a', 'b'], [1, 2]);
    expect(result).toEqual({a: 1, b: 2});
  });

  it('should work with arrays of different lengths', () => {
    let result = zipObject(['a'], [1, 2]);
    expect(result).toEqual({a: 1});

    result = zipObject(['a', 'b', 'c'], [1, 2]);
    expect(result).toEqual({a: 1, b: 2, c: undefined});
  });
});