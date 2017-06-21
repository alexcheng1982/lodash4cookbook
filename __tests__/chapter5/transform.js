const transform = require('lodash/transform');

describe('transform', () => {
  it('should transform properties', () => {
    let result = transform(
      {a: 1, b: 2}, 
      (result, value, key) => result[key] = value * 3);
    expect(result).toEqual({a: 3, b: 6});
  });

  it('should stop processing when the function returns false', () => {
    let result = transform(
      {a: 1, b: 2},
      (result, value, key) => {
        result[key] = value * 3;
        return key > 'a';
      });
    expect(result).toEqual({a: 3});
  });
});