const parseInt = require('lodash/parseInt');

describe('parseInt', () => {
  it('should parse integers', () => {
    expect(parseInt('08')).toEqual(8);
    expect(parseInt('0xa')).toEqual(10);
    expect(parseInt('0111', 2)).toEqual(7);
  });
});