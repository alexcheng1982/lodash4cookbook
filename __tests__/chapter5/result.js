const result = require('lodash/result');

describe('result', () => {
  it('should get property value', () => {
    expect(result({a: 1}, 'a')).toEqual(1);
  });

  it('should get property with default value', () => {
    expect(result({a: 1}, 'b', 0)).toEqual(0);
  });

  it('should support functions', () => {
    expect(result('a', 'split')).toEqual(['a']);
  });
});