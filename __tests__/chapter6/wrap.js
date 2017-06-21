const wrap = require('lodash/wrap');

describe('wrap', () => {
  it('should wrap arguments', () => {
    let sum = (a, b, c) => a + b + c;
    let func = wrap(1, sum);
    expect(func(2, 3)).toEqual(6);
  });
});