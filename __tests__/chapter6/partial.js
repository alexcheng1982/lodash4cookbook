const partial = require('lodash/partial');

describe('partial', () => {
  it('should apply function arguments', () => {
    let sum = (a, b, c) => a + b + c;

    expect(partial(sum, 1)(2, 3)).toEqual(6);
    expect(partial(sum, 1, 2)(3)).toEqual(6);
  });
});