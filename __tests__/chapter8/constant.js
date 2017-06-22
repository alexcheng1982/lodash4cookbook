const constant = require('lodash/constant');

describe('constant', () => {
  it('should return a constant value', () => {
    expect(constant(1)()).toEqual(1);
  });
});