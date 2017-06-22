const ceil = require('lodash/ceil');

describe('ceil', () => {
  it('should get the ceil value', () => {
    expect(ceil(123.45, 1)).toEqual(123.5);
    expect(ceil(123.45, -1)).toEqual(130);
    expect(ceil(123.45, -3)).toEqual(1000);
  });
});