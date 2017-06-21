const spread = require('lodash/spread');

describe('spread', () => {
  it('should spread the arguments', () => {
    let sum = (a, b, c) => a + b + c;
    let func = spread(sum);
    expect(func([1, 2, 3])).toEqual(6);
  });
});