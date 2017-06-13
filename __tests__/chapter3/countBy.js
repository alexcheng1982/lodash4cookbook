const countBy = require('lodash/countBy');

describe('countBy', () => {
  it('should support arrays', () => {
    expect(countBy([1, 2, 3], n => n > 1)).toEqual({
      true: 2,
      false: 1,
    });
  });

  it('should support objects', () => {
    expect(countBy({
      a: 1,
      b: 1,
      c: 2,
    }, val => val / 2)).toEqual({
      1: 1,
      0.5: 2,
    });
  });

  it('should support strings', () => {
    expect(countBy('hello', char => char === 'l')).toEqual({
      true: 2,
      false: 3,
    });
  });
});