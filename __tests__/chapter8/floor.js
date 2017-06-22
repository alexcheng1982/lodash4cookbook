const floor = require('lodash/floor');

describe('floor', () => {
  it('should get the floor value', () => {
    expect(floor(123.45, 1)).toEqual(123.4);
    expect(floor(123.45, -1)).toEqual(120);
    expect(floor(123.45, -3)).toEqual(0);
  });
});