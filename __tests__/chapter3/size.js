const size = require('lodash/size');

describe('size', () => {
  it('should support arrays', () => {
    expect(size([1, 2])).toEqual(2);
  });

  it('should support objects', () => {
    expect(size({
      a: 1,
      b: 2,
      c: 3,
    })).toEqual(3);
  });

  it('should support strings', () => {
    expect(size('hello')).toEqual(5);
  });
});