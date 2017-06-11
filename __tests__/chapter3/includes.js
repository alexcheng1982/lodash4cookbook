const includes = require('lodash/includes');

describe('includes', () => {
  it('should support arrays', () => {
    expect(includes(['a', 'b', 'c'], 'a')).toBe(true);
  });

  it('should support arrays with index', () => {
    expect(includes(['a', 'b', 'c'], 'a', 1)).toBe(false);
  });

  it('should support objects', () => {
    expect(includes({
      a: 1,
      b: 2,
      c: 3
    }, 1)).toBe(true);
  });

  it('should support strings', () => {
    expect(includes('hello', 'h')).toBe(true);
  });
});