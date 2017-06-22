const inRange = require('lodash/inRange');

describe('inRange', () => {
  it('should check if a value is in range', () => {
    expect(inRange(3, 1, 5)).toBe(true);
    expect(inRange(3, 5)).toBe(true);
  });
});