const attempt = require('lodash/attempt');

describe('attempt', () => {
  it('should handle errors', () => {
    let wrong = () => a / 10;
    expect(attempt(wrong) instanceof Error).toBe(true);
  });

  it('should handle success cases', () => {
    let sum = (a, b) => a + b;
    expect(attempt(sum, 1, 2)).toEqual(3);
  });
});