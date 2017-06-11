const filter = require('lodash/filter');

describe('filter', () => {
  it('should support arrays', () => {
    let result = filter(['a', 'b', 'c'], c => c > 'b');
    expect(result).toEqual(['c']);
  });

  it('should support objects', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };
    let result = filter(obj, n => n > 1);
    expect(result).toEqual([2, 3]);
  });

  it('should support strings', () => {
    let result = filter('hello', c => c !== 'l');
    expect(result).toEqual(['h', 'e', 'o']);
  });
});