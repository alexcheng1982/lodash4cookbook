const clamp = require('lodash/clamp');

describe('clamp', () => {
  it('should clamp the input number', () => {
    expect(clamp(5, 1, 10)).toEqual(5);   // In bounds
    expect(clamp(20, 1, 10)).toEqual(10); // Upper bound
    expect(clamp(-20, 1, 10)).toEqual(1); // Lower bound
  });
});