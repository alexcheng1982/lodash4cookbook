const reduce = require('lodash/reduce');

describe('reduce', () => {
  it('should support no initial value', () => {
    let result = reduce([1, 2, 3],
      (accumulator, value) => accumulator + value);
    expect(result).toEqual(6);
  });

  it('should support initial value', () => {
    let result = reduce([1, 2, 3],
      (accumulator, value) => accumulator + value, 100);
    expect(result).toEqual(106);
  });
});