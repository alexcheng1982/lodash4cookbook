const round = require('lodash/round');

describe('round', () => {
  it('should get the rounded value', () => {
    expect(round(123.45, 1)).toEqual(123.5);
    expect(round(123.45, -1)).toEqual(120);
    expect(round(123.45, -3)).toEqual(0);
  });
});