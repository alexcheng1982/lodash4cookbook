const ary = require('lodash/ary');

describe('ary', () => {
  it('should limit the number of arguments', () => {
    let sum = (a, b) => {
      if (a && b) {
        return a + b;
      }
      return a;
    }
    let sum2 = ary(sum, 2);
    expect(sum2(1, 2)).toEqual(3);

    let sum1 = ary(sum, 1);
    expect(sum1(1, 2)).toEqual(1);
  });
});